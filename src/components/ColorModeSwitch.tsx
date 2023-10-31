import { HStack, Switch, Text } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch></Switch>
      <Text>DarkMode</Text>
    </HStack>
  );
};
