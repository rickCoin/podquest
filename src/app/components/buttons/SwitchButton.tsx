import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

interface SwitchButtonProps {
    text?: string;
    selected: boolean;
    onClick: () => void;
    left: boolean;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
    text,
    selected,
    onClick,
    left,
}) => {
    return (
        <div>
            <button
                className={`w-auto h-8 px-2 border border-highlight1 ${
                    selected ? "bg-highlight1" : "bg-transparent"
                } ${left ? "rounded-l-lg" : "rounded-r-lg"}`}
                onClick={onClick}
            >
                <div
                    className={`text-xs md:text-sm ${
                        selected ? "text-primary" : "text-highlight1"
                    } hover:text-primary`}
                >
                    {text}
                </div>
            </button>
        </div>
    );
};

export default SwitchButton;
