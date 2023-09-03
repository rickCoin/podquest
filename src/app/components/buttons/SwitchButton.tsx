import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

interface SwitchButtonProps {
    text?: string;
    onClick: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ text, onClick }) => {
    return (
        <div>
            <button
                className="w-16 h-8 rounded-xl border border-highlight1"
                onClick={onClick}
            >
                <div className="text-sm text-highlight1 hover:text-primary">
                    <FontAwesomeIcon icon={faRepeat} />
                </div>
            </button>
        </div>
    );
};

export default SwitchButton;
