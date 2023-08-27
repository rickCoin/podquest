import axios from "axios";

interface ApiResponse {
    ans: string;
    source: Source[];
}

interface Source {
    title: string;
    url: string;
}
const URL = process.env.NEXT_PUBLIC_API_URL;
const END_POINT = "/qa_chat";

async function qaChatAPI(question: string): Promise<ApiResponse> {
    console.log("qaChatAPI:");

    console.log("question: ", question);
    const apiUrl: string = URL + END_POINT;
    const apiInput: object = {
        question: question,
    };
    try {
        const response = await axios.post(apiUrl, apiInput);
        console.log("response: ", response);
        return response.data;
    } catch (error) {
        console.error("Error while making API call:", error);
        throw error;
    }
}

export { qaChatAPI };
export type { Source };
