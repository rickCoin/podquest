import React, { FormEvent, useState, useEffect } from "react";
import SendButton from "../buttons/SendButton";
import { ApiResponse, Source, qaChatAPI } from "../../api/qa_chat";
import podcastMeta from "../../podcastmeta/podcast_meta.json";

import LoadingIcon from "../LoadingIcon";
import ResponseSection from "./ResponseSection";
import InputSection from "./InputSection";
import { User } from "firebase/auth";
import SuggestList from "./SuggestList";

type InputBoxProps = {
    user?: User;
    selectedPodcast: string;
};

const InputBox: React.FC<InputBoxProps> = ({ user, selectedPodcast }) => {
    const [inputValue, setInputValue] = useState("");
    const [ans, setAns] = useState("");
    const [input, setInput] = useState("");
    const [source, setSource] = useState<Source[]>([]);
    const [response, setResponse] = useState<ApiResponse[]>(); // TODO: add history
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("");
    console.log("selectedPodcast:", selectedPodcast);

    const selectedPodcastMeta =
        podcastMeta[`${selectedPodcast as keyof typeof podcastMeta}`];

    // get photoURL
    useEffect(() => {
        console.log(user);
        if (user) {
            const url = user.photoURL;
            if (url) {
                setPhotoURL(url);
            }
        }
    }, [user]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setInput(inputValue);

        // Handle the inputValue (e.g., send to an API, display on the page, etc.)
        console.log(inputValue);
        if (inputValue) {
            const result = await qaChatAPI(inputValue, selectedPodcast);
            console.log(result);
            setAns(result.ans);
            setSource(result.source);
            // setResponse((prevList) => [...prevList!!, result]);
            console.log("result.ans: ", result.ans);
            console.log("result.source: ", result.source);
        }

        // setAns(inputValue);
        // setAns(result);
        // Optionally reset the inputValue after sending
        setInputValue("");
        setLoading(false);
    };
    return (
        <div>
            {input && (
                <div
                    className="overflow-auto h-auto max-h-80 min-h-0	
                       scrollbar-thin scrollbar-thumb-highlight1 scrollbar-track-highlight"
                >
                    <InputSection input={input} photoURL={photoURL} />

                    <ResponseSection ans={ans} source={source} />
                </div>
            )}
            <SuggestList
                inputs={selectedPodcastMeta.questions}
                setValue={setInputValue}
            />
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center gap-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent border-2 border-highlight1 rounded-xl p-2 w-full"
                        placeholder="ex: how to get viral on internet?"
                    />
                    {loading ? <LoadingIcon size="2x" /> : <SendButton />}
                </div>
            </form>
        </div>
    );
};

export default InputBox;
