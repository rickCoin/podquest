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
                className="text-2xl bg-white w-40 h-40  mt-20 mb-20 rounded-xl font-bold
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
