import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSleigh } from "@fortawesome/free-solid-svg-icons";

const SendButton: React.FC = () => {
    return (
        <div>
            <button
                type="submit"
                className="text-2xl text-highlight1 hover:text-primary"
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
};

export default SendButton;
