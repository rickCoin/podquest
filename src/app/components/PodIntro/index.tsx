/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import podcastMeta from "../../podcastmeta/podcast_meta.json";
import EpisodeList from "./EposideList";
import PodSummary from "./PodSummary";
import SwitchButton from "../buttons/SwitchButton";

interface PodIntroProps {
    selectedPodcast: string;
}

const PodIntro: React.FC<PodIntroProps> = ({ selectedPodcast }) => {
    const [showSummary, setShowSummary] = useState(true);
    const selectedPodcastMeta =
        podcastMeta[`${selectedPodcast as keyof typeof podcastMeta}`];
    return (
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-dark scrollbar-track-highlight">
            <SwitchButton onClick={() => setShowSummary(!showSummary)} />
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
