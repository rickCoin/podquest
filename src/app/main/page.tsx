"use client"; // TODO: learning CSR and SSR
import { useEffect } from "react";
import InputBox from "../components/InputBox";
import PodBlock from "../components/PodBlock";
import PodIntro from "../components/PodIntro";

import { POD_INTRO_TEXT } from "../constant";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Header from "../components/Header";

// for indentation
function dedent(str: string): string {
    const match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) return str;
    const indent = Math.min(...match.map((el) => el.length));
    const re = new RegExp(`^[ \\t]{${indent}}`, "gm");
    return indent > 0 ? str.replace(re, "") : str;
}

export default function Main() {
    const router = useRouter();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
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
            <Header />
            {/* podcast icons */}
            <div
                className="flex gap-8 mx-8 md:mx-40 overflow-y-auto
                             scrollbar-none scrollbar-thumb-highlight1 scrollbar-track-highlight"
            >
                <PodBlock
                    image_url="/ted_talks_daily.png"
                    onClick={() => {
                        console.log("PodBlock clicked");
                    }}
                />
                <PodBlock
                    label="Coming Soon"
                    onClick={() => {
                        console.log("PodBlock clicked");
                    }}
                />
                <PodBlock
                    label="Coming Soon"
                    onClick={() => {
                        console.log("PodBlock clicked");
                    }}
                />
                <PodBlock
                    label="Coming Soon"
                    onClick={() => {
                        console.log("PodBlock clicked");
                    }}
                />
            </div>
            {/* podcast intro */}
            <div className="bg-primary">
                <PodIntro
                    title={dedent(POD_INTRO_TEXT.HEADER)}
                    description={dedent(POD_INTRO_TEXT.DESCRIPTION)}
                />
            </div>

            <div className="my-4 mx-8 md:my-20 md:mx-40">
                <InputBox />
            </div>
        </div>
    );
}
