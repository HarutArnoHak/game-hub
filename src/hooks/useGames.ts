import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params:
      //{ genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id }
      {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrderSelector,
        search: gameQuery.searchText
      },
    },
    //[selectedGenre?.id, selectedPlatform?.id]
    //[gameQuery.genre?.id, gameQuery.platform?.id]
    [gameQuery]
  );

export default useGames;
