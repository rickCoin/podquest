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
        <div className="flex items-center py-8 px-24 md:gap-8 md:py-24 md:px-40 justify-center text-white  text-center">
            <div>
                <h1 className="text-2xl md:text-6xl text-highlight1 font-bold text-left">
                    {title}
                </h1>
                <p className="text-sm mt-8 md:text-2xl md:mt-16 text-highlight1 text-left">
                    {description}
                </p>
            </div>

            <Image
                className="w-40 h-40 md:w-60 md:h-60"
                height={280}
                width={280}
                priority
                src={podquestIcon}
                alt=""
            />
        </div>
    );
};

export default HeroSection;
