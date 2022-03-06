import { HStack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { CalculateDoubleOrigin1 } from "../Molecules/CalculateDoubleOrigin1";
import { CalculateDoubleOrigin2 } from "../Molecules/CalculateDoubleOrigin2";

export const CalculateDouble: VFC = memo(() => {
  return (
    <>
      <HStack margin="30px">
        <CalculateDoubleOrigin1 />
        <CalculateDoubleOrigin2 />
      </HStack>
    </>
  );
});
