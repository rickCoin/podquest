import React from "react";

interface SuggestButtonProps {
    text?: string;
    onClick: () => void;
}

const SuggestButton: React.FC<SuggestButtonProps> = ({ text, onClick }) => {
    return (
        <div>
            <button
                className="w-auto h-auto rounded-xl border border-highlight1 text-highlight1 
                p-4 text-left hover:text-primary"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default SuggestButton;
