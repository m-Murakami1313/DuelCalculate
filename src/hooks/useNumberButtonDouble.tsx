import { useState } from "react";

export const useNumberButtonDouble = () => {
  const [display, setDisplay] = useState("DUEL!!");
  const [calculate, setCalculate] = useState("8000");
  const [numberBlock, setNumberBlock] = useState("");
  const [equalBoolean, setEqualBoolean] = useState(true);
  const [equal, setEqual] = useState(8000);
  const [displayBoolean, setDisplayBoolean] = useState(false);
  const [dotBoolean, setDotBoolean] = useState(false);
  const [calculateBoolean, setCalculateBoolean] = useState(true);
  const [minusBoolean, setMinusBoolean] = useState(false);
  const [operateBoolean, setOperateBoolean] = useState(false);

  const click1 = () => {
    if (equalBoolean === true) {
      setDisplay("1");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("1");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "1");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 1);
        setDisplayBoolean(true);
      }
    }
  };

  const click2 = () => {
    if (equalBoolean === true) {
      setDisplay("2");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("2");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "2");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 2);
        setDisplayBoolean(true);
      }
    }
  };
  const click3 = () => {
    if (equalBoolean === true) {
      setDisplay("3");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("3");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "3");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 3);
        setDisplayBoolean(true);
      }
    }
  };
  const click4 = () => {
    if (equalBoolean === true) {
      setDisplay("4");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("4");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "4");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 4);
        setDisplayBoolean(true);
      }
    }
  };
  const click5 = () => {
    if (equalBoolean === true) {
      setDisplay("5");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("5");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "5");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 5);
        setDisplayBoolean(true);
      }
    }
  };
  const click6 = () => {
    if (equalBoolean === true) {
      setDisplay("6");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("6");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "6");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 6);
        setDisplayBoolean(true);
      }
    }
  };
  const click7 = () => {
    if (equalBoolean === true) {
      setDisplay("7");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("7");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "7");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 7);
        setDisplayBoolean(true);
      }
    }
  };
  const click8 = () => {
    if (equalBoolean === true) {
      setDisplay("8");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("8");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "8");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 8);
        setDisplayBoolean(true);
      }
    }
  };
  const click9 = () => {
    if (equalBoolean === true) {
      setDisplay("9");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
      setDisplayBoolean(true);
    } else {
      if (displayBoolean === false && minusBoolean === false) {
        setDisplay("9");
        setDisplayBoolean(true);
      } else if (displayBoolean === false && minusBoolean === true) {
        setDisplay(display + "9");
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 9);
        setDisplayBoolean(true);
      }
    }
  };

  const click0 = () => {
    if (equalBoolean === true) {
      setDisplay("0");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setCalculateBoolean(false);
    } else {
      if (displayBoolean === false) {
        return;
      } else if (dotBoolean === true) {
        setDisplay(display + 0);
        setDisplayBoolean(true);
      } else {
        setDisplay(display + 0);
        setDisplayBoolean(true);
      }
    }
  };

  const clickPlus = () => {
    // 合計に格納されていて、displayがない場合　false
    // 合計に格納されていて、displayがある場合  true
    // 合計に格納されてなく、displayがある場合  true
    // 合計に格納されてなく、displayがない場合  false
    if (equalBoolean === true && displayBoolean === false) {
      setNumberBlock(Number(equal) + "+");
      setDisplay("0");
      setCalculate(equal + "+");
      setEqualBoolean(false);
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === false
    ) {
      setCalculate(display + "+");
      setNumberBlock(Number(display) + "+");
      setDisplay("0");
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
      setMinusBoolean(false);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === true
    ) {
      const number = eval(calculate + display);
      setNumberBlock(Number(number) + "+");
      setCalculate(number + "+");
      setDotBoolean(false);
      setDisplay("0");
      setDisplayBoolean(false);
      setMinusBoolean(false);
    } else {
      return;
    }
  };

  const clickMinus = () => {
    // 合計に格納されていて、displayがない場合　false
    // 合計に格納されていて、displayがある場合  true
    // 合計に格納されてなく、displayがある場合  true
    // 合計に格納されてなく、displayがない場合  false
    if (equalBoolean === true && displayBoolean === false) {
      setNumberBlock(Number(equal) + "-");
      setDisplay("0");
      setCalculate(equal + "-");
      setEqualBoolean(false);
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
    } else if (
      (equalBoolean === false &&
        displayBoolean === false &&
        calculateBoolean === false) ||
      operateBoolean === true
    ) {
      setDisplay("-");
      setMinusBoolean(true);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === false
    ) {
      setCalculate(display + "-");
      setNumberBlock(Number(display) + "-");
      setDisplay("0");
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
      setMinusBoolean(false);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === true
    ) {
      const number = eval(calculate + display);
      setCalculate(number + "-");
      setNumberBlock(Number(number) + "-");
      setDotBoolean(false);
      setDisplay("0");
      setDisplayBoolean(false);
      setMinusBoolean(false);
    } else if (
      equalBoolean === false &&
      displayBoolean === false &&
      calculateBoolean === true
    ) {
      return;
    } else {
      return;
    }
  };

  const clickTimes = () => {
    // 合計に格納されていて、displayがない場合　false
    // 合計に格納されていて、displayがある場合  true
    // 合計に格納されてなく、displayがある場合  true
    // 合計に格納されてなく、displayがない場合  false
    if (equalBoolean === true && displayBoolean === false) {
      setNumberBlock(Number(equal) + "*");
      setDisplay("0");
      setCalculate(equal + "*");
      setEqualBoolean(false);
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
      setOperateBoolean(true);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === false
    ) {
      setCalculate(display + "*");
      setNumberBlock(Number(display) + "*");
      setDisplay("0");
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
      setMinusBoolean(false);
      setOperateBoolean(true);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === true
    ) {
      const number = eval(calculate + display);
      setCalculate(number + "*");
      setNumberBlock(Number(number) + "*");
      setDotBoolean(false);
      setDisplay("0");
      setDisplayBoolean(false);
      setMinusBoolean(false);
      setOperateBoolean(true);
    } else {
      return;
    }
  };

  const clickDivided = () => {
    // 合計に格納されていて、displayがない場合　false
    // 合計に格納されていて、displayがある場合  true
    // 合計に格納されてなく、displayがある場合  true
    // 合計に格納されてなく、displayがない場合  false
    if (equalBoolean === true && displayBoolean === false) {
      setNumberBlock(Number(equal) + "/");
      setDisplay("0");
      setCalculate(equal + "/");
      setEqualBoolean(false);
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
      setOperateBoolean(true);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === false
    ) {
      setCalculate(display + "/");
      setNumberBlock(Number(display) + "/");
      setDisplay("0");
      setDisplayBoolean(false);
      setDotBoolean(false);
      setCalculateBoolean(true);
      setMinusBoolean(false);
      setOperateBoolean(true);
    } else if (
      equalBoolean === false &&
      displayBoolean === true &&
      calculateBoolean === true
    ) {
      const number = eval(calculate + display);
      setCalculate(number + "/");
      setNumberBlock(Number(number) + "/");
      setDotBoolean(false);
      setDisplay("0");
      setDisplayBoolean(false);
      setMinusBoolean(false);
      setOperateBoolean(true);
    } else {
      return;
    }
  };

  const clickEqual = () => {
    //合計を格納する
    if (
      calculateBoolean === false ||
      equalBoolean === true ||
      displayBoolean === false
    ) {
      return;
    } else {
      const number = eval(numberBlock + display);
      setCalculate(calculate + display + "=" + number);
      setEqualBoolean(true);
      setEqual(number);
      setDotBoolean(false);
      setDisplay("0");
      setDisplayBoolean(false);
      setMinusBoolean(false);
      setOperateBoolean(false);
    }
  };

  const clickClear = () => {
    setCalculate("");
    setDisplay("0");
    setNumberBlock("");
    setDisplayBoolean(false);
    setDotBoolean(false);
    setMinusBoolean(false);
    setOperateBoolean(false);
  };

  const clickDot = () => {
    if (
      displayBoolean === false &&
      dotBoolean === false &&
      equalBoolean === false
    ) {
      setDisplay(0 + ".");
      setDotBoolean(true);
      setDisplayBoolean(true);
    } else if (displayBoolean === true && dotBoolean === false) {
      setDisplay(display + ".");
      setDotBoolean(true);
      setDisplayBoolean(true);
    } else if (
      displayBoolean === false &&
      dotBoolean === false &&
      equalBoolean === true
    ) {
      setDisplay(0 + ".");
      setCalculate("");
      setEqual("");
      setNumberBlock("");
      setEqualBoolean(false);
      setDisplayBoolean(true);
      setDotBoolean(true);
    } else if (
      displayBoolean === false &&
      dotBoolean === false &&
      equalBoolean === false &&
      calculateBoolean === true
    ) {
      setDisplay(0 + ".");
      setDisplayBoolean(true);
      setDotBoolean(true);
    } else {
      return;
    }
  };

  return {
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
  };
};
