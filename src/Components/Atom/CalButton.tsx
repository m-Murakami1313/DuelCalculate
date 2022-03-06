import { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  onClick: any;
  number: any;
};

export const CalButton: VFC<Props> = memo((props) => {
  const { number, onClick } = props;
  return (
    <>
      <div>
        <Button size="lg" onClick={onClick}>
          {number}
        </Button>
      </div>
    </>
  );
});
