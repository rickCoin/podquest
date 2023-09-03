import React from "react";
import Image from "next/image";

interface PodBlockProps {
    onClick: () => void;
    label?: string;
    image_url?: string;
}

const PodBlock: React.FC<PodBlockProps> = ({ onClick, label, image_url }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="text-sm bg-white w-16 h-16 my-4 md:text-2xl md:w-32 md:h-32 md:my-20 rounded-xl font-bold
                 hover:text-primary"
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

export default PodBlock;
