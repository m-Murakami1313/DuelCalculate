import { memo, VFC } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  value: any;
};

export const DisplayDouble1: VFC<Props> = memo((props) => {
  const { value } = props;
  return (
    <>
      <Input
        value={value}
        size="lg"
        borderColor="red.300"
        borderWidth="4px"
        borderStyle="solid"
        bg="white"
      />
    </>
  );
});
