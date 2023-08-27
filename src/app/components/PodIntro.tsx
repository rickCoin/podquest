import React from "react";

interface IntroProps {
    title: string;
    description: string;
}

const PodIntro: React.FC<IntroProps> = ({ title, description }) => {
    return (
        <div
            className="h-60 w-auto mx-40 overflow-auto 
        scrollbar-thin scrollbar-thumb-dark scrollbar-track-highlight"
        >
            <div>
                <h1 className="my-12 text-secondary text-4xl font-bold text-left">
                    {title}
                </h1>
                <p className="my-8 text-secondary text-xl text-left">
                    {description}
                </p>
                <div className="my-8 text-secondary text-xl text-left">
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
