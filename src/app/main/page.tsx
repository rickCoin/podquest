"use client"; // TODO: learning CSR and SSR
import { use, useEffect, useState } from "react";
import PodBlock from "../components/PodBlock";
import PodIntro from "../components/PodIntro";
import ChatInterface from "../components/ChatInterface";

import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import { User } from "firebase/auth";
import { PODCAST_LIST } from "../constant";
import { isStringInPodcastList } from "../components/utils/matchPodcastTool";

export default function Main() {
    const router = useRouter();
    const [user, setUser] = useState<User>();
    const [podcast, setPodcast] = useState(PODCAST_LIST.TED_TALK_DAILY);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                // User is signed in.
                console.log("User is signed in with uid:", user.uid);
            } else {
                // No user is signed in or the state is not yet determined.
                console.log("No user is signed in or checking user state.");
                router.push("/");
            }
        });
    }, [router]);
    return (
        <div className="bg-dark min-h-screen overflow-auto">
            <title>PodQuest</title>

            <Header user={user} />
            {/* podcast icons */}
            <div
                className="flex gap-8 mx-8 md:mx-40 overflow-y-auto
                             scrollbar-none scrollbar-thumb-highlight1 scrollbar-track-highlight"
            >
                <PodBlock
                    image_url="/ted_talks_daily.png"
                    label={PODCAST_LIST.TED_TALK_DAILY}
                    selected={PODCAST_LIST.TED_TALK_DAILY === podcast}
                    onClick={() => {
                        console.log(
                            `select clicked: ${PODCAST_LIST.TED_TALK_DAILY}`
                        );
                        setPodcast(PODCAST_LIST.TED_TALK_DAILY);
                    }}
                />
                <PodBlock
                    image_url="/not_just_design_icon.png"
                    label={PODCAST_LIST.NOT_JUST_DESIGN}
                    selected={PODCAST_LIST.NOT_JUST_DESIGN === podcast}
                    onClick={() => {
                        console.log(
                            `select clicked: ${PODCAST_LIST.NOT_JUST_DESIGN}`
                        );
                        setPodcast(PODCAST_LIST.NOT_JUST_DESIGN);
                    }}
                />
                <PodBlock
                    label="Coming Soon"
                    selected={"Coming Soon" === podcast}
                    onClick={() => {
                        console.log("PodBlock clicked");
                    }}
                />
                <PodBlock
                    label="Coming Soon"
                    selected={"Coming Soon" === podcast}
                    onClick={() => {
                        console.log("PodBlock clicked");
                    }}
                />
            </div>
            {/* podcast intro */}
            <div className="mx-8 md:mx-40">
                <PodIntro selectedPodcast={podcast} />
            </div>
            <div className="mx-8 md:mx-40">
                <ChatInterface user={user} selectedPodcast={podcast} />
            </div>
        </div>
    );
}
