import React from "react";
import Image from "next/image";

interface SourceBlockProps {
    label?: string;
    image_url?: string;
    info: string;
    podcast_url?: string;
}

const SourceBlock: React.FC<SourceBlockProps> = ({
    label,
    image_url,
    podcast_url,
    info,
}) => {
    const handleRedirect = () => {
        if (podcast_url) {
            window.open(podcast_url, "_blank");
        }
    };

    return (
        <div>
            <button
                onClick={handleRedirect}
                className="text-base w-8 h-8 md:text-xl md:w-12 md:h-12 border-2 border-highlight1 rounded-full font-bold
                 hover:text-primary"
                title={info}
            >
                {label && label}
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

export default SourceBlock;
