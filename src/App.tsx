import { Center, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SOrtSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrderSelector: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  return (
    <Grid
      templateAreas={{ base: `"nav " "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre: genre });
            }}
          />
        </GridItem>
      </Show>
      <Center>
        <GridItem area="main">
          <HStack paddingX={8}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrderSelector={gameQuery.sortOrderSelector}
              onSelectSortOrder={(selection) =>
                setGameQuery({ ...gameQuery, sortOrderSelector: selection })
              }
            />
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
            // selectedPlatform={gameQuery.platform}
            //selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Center>
    </Grid>
  );
}

export default App;
