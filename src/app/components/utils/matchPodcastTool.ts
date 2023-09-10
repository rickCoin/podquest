import { PODCAST_LIST } from "../../constant";



type PodcastListType = (typeof PODCAST_LIST)[keyof typeof PODCAST_LIST];

export const isStringInPodcastList = (str: string) => {
    return Object.values(PODCAST_LIST).includes(str as PodcastListType);
};
