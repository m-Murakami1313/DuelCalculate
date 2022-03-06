import React, { VFC, memo } from "react";
import { Stack, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { CalButton } from "../Atom/CalButton";
import { DisplaySingle } from "../Atom/DisplaySingle";
import { useNumberButton } from "../../hooks/useNumberButton";

export const CalculateSingleOrigin: VFC = memo(() => {
  const {
    display,
    calculate,
    click0,
    click1,
    click2,
    click3,
    click4,
    click5,
    click6,
    click7,
    click8,
    click9,
    clickPlus,
    clickMinus,
    clickTimes,
    clickDivided,
    clickDot,
    clickClear,
    clickEqual
  } = useNumberButton();
  const onClick0 = () => click0();
  const onClick1 = () => click1();
  const onClick2 = () => click2();
  const onClick3 = () => click3();
  const onClick4 = () => click4();
  const onClick5 = () => click5();
  const onClick6 = () => click6();
  const onClick7 = () => click7();
  const onClick8 = () => click8();
  const onClick9 = () => click9();
  const onClickPlus = () => clickPlus();
  const onClickMinus = () => clickMinus();
  const onClickDivided = () => clickDivided();
  const onClickTimes = () => clickTimes();
  const onClickDot = () => clickDot();
  const onClickClear = () => clickClear();
  const onClickEqual = () => clickEqual();

  const history = useHistory();
  const onClickDuel = () => history.push("/page1/Calculate2");

  return (
    <>
      <Box
        w="300px"
        h="400px"
        bg="gray.400"
        p={3}
        boxShadow="base"
        borderRadius="lg"
      >
        <DisplaySingle value={display} />
        <DisplaySingle value={calculate} />
        <Box>
          <Stack direction="row" m={2}>
            <CalButton number={7} onClick={onClick7} />
            <CalButton number={8} onClick={onClick8} />
            <CalButton number={9} onClick={onClick9} />
            <CalButton number={"/"} onClick={onClickDivided} />
          </Stack>
          <Stack direction="row" m={2}>
            <CalButton number={4} onClick={onClick4} />
            <CalButton number={5} onClick={onClick5} />
            <CalButton number={6} onClick={onClick6} />
            <CalButton number={"×"} onClick={onClickTimes} />
          </Stack>
          <Stack direction="row" m={2}>
            <CalButton number={1} onClick={onClick1} />
            <CalButton number={2} onClick={onClick2} />
            <CalButton number={3} onClick={onClick3} />
            <CalButton number={"-"} onClick={onClickMinus} />
          </Stack>
          <Stack direction="row" m={2}>
            <CalButton number={0} onClick={onClick0} />
            <CalButton number={"."} onClick={onClickDot} />
            <CalButton number={"="} onClick={onClickEqual} />
            <CalButton number={"+"} onClick={onClickPlus} />
          </Stack>
          <Stack direction="row" m={2}>
            <CalButton number={"C"} onClick={onClickClear} />
            <CalButton number={"D"} onClick={onClickDuel} />
          </Stack>
        </Box>
      </Box>
    </>
  );
});
