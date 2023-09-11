import React from "react";

type EpisodeListProps = { episodes: { id: number; title: string }[] };

// TODO modify the style and EpisodeListProps
export default function EpisodeList({ episodes }: EpisodeListProps) {
    return (
        <div
            className="flex flex-col h-40 justify-center items-center 
            overflow-auto  scrollbar-thin scrollbar-thumb-highlight1 "
        >
            <ul className="my-4 md:my-8 text-secondary list-disc pl-8">
                {episodes.map((episode) => (
                    <li key={episode.id} className="text-base md:text-xl">
                        {episode.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
