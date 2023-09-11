import React from "react";

type PodSummaryProps = {
    podcast: {
        name: string;
        intro: string;
        episodes: { id: number; title: string }[];
    };
};

// TODO modify the style and EpisodeListProps
export default function PodSummary({ podcast }: PodSummaryProps) {
    return (
        <div
            className="flex flex-col h-40 justify-center items-center
        scrollbar-thin scrollbar-thumb-highlight1 scrollbar-track-highlight"
        >
            <p className="my-4 md:my-8 text-base md:text-xl text-secondary text-left">
                {podcast.intro}
            </p>
        </div>
    );
}
