import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
    text?: string;
    onClick?: () => void;
}

const SignOutButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-sm md:text-2xl flex items-center justify-center bg-transparent text-highlight2 rounded-xl font-bold
                 hover:text-primary"
        >
            <div className="flex gap-2 md:gap-4 items-center">
                {text}
                <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="w-4 h-4 md:w-8 md:h-8"
                />
            </div>
        </button>
    );
};
export default SignOutButton;
