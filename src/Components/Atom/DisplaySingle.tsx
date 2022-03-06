import React, { memo, VFC } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  value: any;
};

export const DisplaySingle: VFC<Props> = memo((props) => {
  const { value } = props;
  return (
    <>
      <Input
        value={value}
        size="lg"
        borderColor="tomato"
        borderWidth="4px"
        borderStyle="solid"
        bg="white"
      />
    </>
  );
});
