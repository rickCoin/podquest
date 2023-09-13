import React from "react";

type EpisodeListProps = { episodes: { id: number; title: string }[] };

export default function EpisodeList({ episodes }: EpisodeListProps) {
    return (
        <div className="flex flex-col h-40 justify-center items-center">
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-highlight1 ">
                <div className="my-4 md:my-8 mx-4 md:mx-8 text-secondary list-disc">
                    {episodes.map((episode) => (
                        <li key={episode.id} className="text-base md:text-xl">
                            {episode.title}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}
