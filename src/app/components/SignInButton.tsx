import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const SignInButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="flex items-center justify-center text-2xl bg-dark text-highlight1 w-48 h-16 ml-40 mt-40 rounded-xl font-bold
                 hover:text-primary"
            >
                {text}
                <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className="ml-4 w-8 h-8"
                />
            </button>
        </div>
    );
};

export default SignInButton;
