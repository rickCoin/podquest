import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const SignInButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className="mx-24 my-12 md:mx-40 md:my-40">
            <button
                onClick={onClick}
                className="text-sm w-24 h-8  md:text-2xl md:w-48 md:h-16 flex items-center justify-center bg-dark text-highlight1 rounded-xl font-bold
                 hover:text-primary"
            >
                <div className="flex gap-2 md:gap-4 items-center">
                    {text}
                    <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        className="w-4 h-4 md:w-8 md:h-8"
                    />
                </div>
            </button>
        </div>
    );
};

export default SignInButton;
