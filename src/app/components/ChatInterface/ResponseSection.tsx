import React from "react";
import podquestIcon from "../../../../public/podquest-icon.svg";
import Image from "next/image";

import SourceBlock from "../SourceBlock";

interface ResponseSectionProps {
    ans: string;
    source: Array<{ url: string; title: string }>;
}

const ResponseSection: React.FC<ResponseSectionProps> = ({ ans, source }) => {
    return ans.trim() ? (
        <div className="flex h-auto p-4 gap-8 bg-primary text-highlight1">
            <Image
                className="w-4 h-4 md:w-6 md:h-6"
                height={280}
                width={40}
                src={podquestIcon}
                alt=""
            />
            <div className="flex flex-col gap-4 text-base md:text-xl">
                <p>{ans}</p>
                {source.length !== 0 && (
                    <div className="flex items-center">
                        <p>Source:</p>
                        <div className="flex">
                            {source.map((src, index) => (
                                <div className="mx-4" key={index}>
                                    <SourceBlock
                                        podcast_url={src.url}
                                        label={index.toString()}
                                        info={src.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default ResponseSection;
