import React, { Dispatch, SetStateAction } from "react";
import SuggestButton from "../buttons/SuggestButton";
interface SuggestListProps {
    inputs: string[];
    setValue: Dispatch<React.SetStateAction<string>>;
}

const SuggestList: React.FC<SuggestListProps> = ({ inputs, setValue }) => {
    return (
        <div
            className="flex flex-col md:flex-row h-40 my-4 gap-4 
            overflow-auto scrollbar-thin scrollbar-thumb-highlight1"
        >
            {inputs.map((input, index) => (
                <div key={index} className="flex items-center mx-4">
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
