import React from "react";
import podquestIcon from "../../../public/podquest-icon.svg";
import Image from "next/image";

interface HeroProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const HeroSection: React.FC<HeroProps> = ({
    title,
    description,
    buttonText,
    buttonLink,
}) => {
    return (
        <div className="flex items-center gap-8 justify-center text-white py-24 text-center">
            <div>
                <h1 className="text-highlight1 text-6xl font-bold mb-4 ml-40 text-left">
                    {title}
                </h1>
                <p className="text-highlight1 text-3xl mt-8 ml-40 text-left">
                    {description}
                </p>
            </div>

            <Image
                className="mr-40"
                height={280}
                width={280}
                priority
                src={podquestIcon}
                alt="Follow us on Twitter"
            />
        </div>
    );
};

export default HeroSection;
