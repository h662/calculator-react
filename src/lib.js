export const operate = ({
  operator,
  setOperator,
  result,
  setResult,
  temp,
  setTemp,
}) => {
  if (result === "0") {
    alert("숫자를 입력하세요.");
    return;
  }

  switch (operator) {
    case "+":
      setTemp(+temp + +result + "");
      setResult("0");
      break;
    case "-":
      setTemp(+temp - +result + "");
      setResult("0");
      break;
    case "*":
      setTemp(+temp * +result + "");
      setResult("0");
      break;
    case "/":
      setTemp(parseInt(+temp / +result, 10) + "");
      setResult("0");
      break;
    default:
      alert("잘못된 연산자입니다.");
  }

  setOperator("");
};
