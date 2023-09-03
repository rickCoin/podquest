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
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-3xl text-secondary font-bold text-left">
                {podcast.name}
            </h1>
            <p className="my-4 md:my-8 text-base md:text-xl text-secondary text-left">
                {podcast.intro}
            </p>
        </div>
    );
}
