import React from "react";
import { Badge, Text } from "@chakra-ui/react";
interface Props {
  metacritic: number;
}

const GameReviewScore = ({ metacritic }: Props) => {
  let color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {metacritic}
    </Badge>
  );
};

export default GameReviewScore;
