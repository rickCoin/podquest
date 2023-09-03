import React, { Dispatch, SetStateAction } from "react";
import SuggestButton from "../buttons/SuggestButton";
interface SuggestListProps {
    inputs: string[];
    setValue: Dispatch<React.SetStateAction<string>>;
}

const SuggestList: React.FC<SuggestListProps> = ({ inputs, setValue }) => {
    return (
        <div className="flex my-4 gap-4 overflow-y-auto">
            {inputs.map((input, index) => (
                <div key={index} className="flex items-center">
                    <SuggestButton
                        text={input}
                        onClick={() => setValue(input)}
                    />
                </div>
            ))}
        </div>
    );
};

export default SuggestList;
