import React from "react";
import ProfileImage from "../ProfileImage";

interface InputSectionProps {
    input: string;
    photoURL?: string;
}

const InputSection: React.FC<InputSectionProps> = ({ photoURL, input }) => {
    return input.trim() ? (
        <div className="flex h-auto items-center p-4">
            <ProfileImage photoURL={photoURL} />
            <p className="p-4 md:p-8 text-base md:text-xl text-highlight1">
                {input}
            </p>
        </div>
    ) : null;
};

export default InputSection;
