import React from "react";
import Image from "next/image";
import { isStringInPodcastList } from "./utils/matchPodcastTool";

interface PodBlockProps {
    onClick: () => void;
    selected: boolean;
    label: string;
    image_url?: string;
}

const PodBlock: React.FC<PodBlockProps> = ({
    onClick,
    selected,
    label,
    image_url,
}) => {
    const emptyPod = !isStringInPodcastList(label);
    return (
        <div>
            <button
                onClick={onClick}
                className={`text-sm bg-white w-16 h-16 my-4 border-4 border-transparent 
                            rounded-xl font-bold hover:text-primary hover:border-primary
                            md:text-2xl md:w-32 md:h-32 md:my-20 md:border-8
                            ${
                                selected
                                    ? "border-primary"
                                    : "border-transparent"
                            }`}
            >
                {emptyPod && label}
                {image_url && (
                    <Image
                        className="rounded-xl"
                        src={image_url}
                        width={500}
                        height={500}
                        alt="Podcast Cover"
                    />
                )}
            </button>
        </div>
    );
};

export default PodBlock;
