"use client"; // TODO: learning CSR and SSR
import InputBox from "../components/InputBox";
import PodBlock from "../components/PodBlock";
import PodIntro from "../components/PodIntro";
import { POD_INTRO_TEXT } from "../constant";

// for indentation
function dedent(str: string): string {
    const match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) return str;
    const indent = Math.min(...match.map((el) => el.length));
    const re = new RegExp(`^[ \\t]{${indent}}`, "gm");
    return indent > 0 ? str.replace(re, "") : str;
}

export default function Main() {
    return (
        <div className="bg-dark min-h-screen overflow-auto">
            {/* podcast icons */}
            <div
                className="flex gap-20 mx-40 overflow-y-auto
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

            <div className="mx-40 my-20">
                <InputBox />
            </div>
        </div>
    );
}
