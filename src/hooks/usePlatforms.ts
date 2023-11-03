import { usePanGesture } from "@chakra-ui/react";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const UsePlatforms = () => useData<Platform>('/platforms/lists/parents')
export default UsePlatforms