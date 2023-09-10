/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import podcastMeta from "../../podcastmeta/podcast_meta.json";
import EpisodeList from "./EposideList";
import PodSummary from "./PodSummary";
import SwitchButton from "../buttons/SwitchButton";

interface PodIntroProps {
    selectedPodcast: string;
}

const INTRO_TEXT = "Introduction";
const EPISODE_TEXT = "Collected Episodes";

const PodIntro: React.FC<PodIntroProps> = ({ selectedPodcast }) => {
    const [showSummary, setShowSummary] = useState(true);
    const selectedPodcastMeta =
        podcastMeta[`${selectedPodcast as keyof typeof podcastMeta}`];
    return (
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-dark scrollbar-track-highlight">
            <div>
                <h1 className="my-4 text-xl md:text-3xl text-secondary font-bold text-center">
                    {selectedPodcastMeta.name}
                </h1>
            </div>

            <div className="flex">
                <SwitchButton
                    onClick={() => setShowSummary(!showSummary)}
                    selected={showSummary}
                    text={INTRO_TEXT}
                    left={true}
                />
                <SwitchButton
                    onClick={() => setShowSummary(!showSummary)}
                    selected={!showSummary}
                    text={EPISODE_TEXT}
                    left={false}
                />
            </div>

            <div className="justify-center">
                {showSummary ? (
                    <PodSummary podcast={selectedPodcastMeta} />
                ) : (
                    <EpisodeList episodes={selectedPodcastMeta.episodes} />
                )}
            </div>
        </div>
    );
};

export default PodIntro;
