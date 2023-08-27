import React, { FormEvent, useState } from "react";
import SendButton from "./SendButton";
import { Source, qaChatAPI } from "../api/qa_chat";
import LoadingIcon from "./LoadingIcon";
import SourceBlock from "./SourceBlock";
const InputBox: React.FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [ans, setAns] = useState("");
    const [source, setSource] = useState<Source[]>([]);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Handle the inputValue (e.g., send to an API, display on the page, etc.)
        console.log(inputValue);
        if (inputValue) {
            const result = await qaChatAPI(inputValue);
            console.log(result);
            setAns(result.ans);
            setSource(result.source);
            console.log("result.ans: ", result.ans);
            console.log("result.source: ", result.source);
        }

        // setAns(inputValue);
        // setAns(result);
        // Optionally reset the inputValue after sending
        setInputValue("");
        setLoading(false);
    };
    // what did fuel company do?
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="px-4 py-4 md:px-8 md:py-8 border-2 border-highlight1 rounded-xl "
            >
                {/* Response message is here */}
                <div
                    className="h-64 text-base md:text-xl text-highlight1 
                               flex flex-col justify-between overflow-auto
                               scrollbar-thin scrollbar-thumb-highlight1 scrollbar-track-highlight"
                >
                    <p>{ans}</p>
                    {source.length !== 0 && (
                        <div className="flex items-center">
                            <p>Source:</p>
                            <div className="flex">
                                {source.map((src, index) => (
                                    <div className="mx-4 my-4" key={index}>
                                        <SourceBlock
                                            podcast_url={src.url}
                                            label={index.toString()}
                                            info={src.title}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Input box is here */}
                <div className="flex items-center justify-center gap-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent border-2 border-highlight1 rounded-xl p-2 w-full"
                        placeholder="Ask here..."
                    />
                    {loading ? <LoadingIcon size="2x" /> : <SendButton />}
                </div>
            </form>
        </div>
    );
};

export default InputBox;
