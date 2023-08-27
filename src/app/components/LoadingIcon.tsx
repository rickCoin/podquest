// LoadingIcon.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface LoadingIconProps {
    size?:
        | "xs"
        | "lg"
        | "sm"
        | "1x"
        | "2x"
        | "3x"
        | "4x"
        | "5x"
        | "6x"
        | "7x"
        | "8x"
        | "9x"
        | "10x";
    className?: string;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ size = "1x" }) => {
    return (
        <div className="text-highlight1 ml-4">
            <FontAwesomeIcon icon={faSpinner} spin size={size} />
        </div>
    );
};

export default LoadingIcon;
