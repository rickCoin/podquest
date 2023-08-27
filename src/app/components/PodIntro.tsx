/* eslint-disable react/no-unescaped-entities */
import React from "react";

interface IntroProps {
    title: string;
    description: string;
}

const PodIntro: React.FC<IntroProps> = ({ title, description }) => {
    return (
        <div
            className="h-60 mx-8 md:mx-40 w-auto overflow-auto 
        scrollbar-thin scrollbar-thumb-dark scrollbar-track-highlight"
        >
            <div>
                <h1 className="my-8 text-2xl md:my-12 md:text-4xl text-secondary font-bold text-left">
                    {title}
                </h1>
                <p className="my-4 md:my-8 text-base md:text-xl text-secondary text-left">
                    {description}
                </p>
                <div className="my-4 md:my-8 text-base md:text-xl text-secondary text-left">
                    <p>Collected episodes :</p>
                    <p>
                        - The Molecular Love Story That Could Help Power the
                        World
                    </p>
                    <p>
                        - How to Meet Your Child's Difficult Behavior with
                        Compassion
                    </p>
                    <p>
                        - The Climate Crisis Is Expensive – Here’s Who Should
                        Pay for It
                    </p>
                    <p>- Why Real Change Is About More Than Just Going Viral</p>
                    <p>- A Mysterious Design That Appears Across Millennia</p>
                </div>
            </div>
        </div>
    );
};

export default PodIntro;
