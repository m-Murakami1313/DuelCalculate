import { HStack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { CalculateSingleOrigin } from "../Molecules/CalculateSingleOrigin";

export const CalculateSingle: VFC = memo(() => {
  return (
    <>
      <HStack margin="30px">
        <CalculateSingleOrigin />
      </HStack>
    </>
  );
});
