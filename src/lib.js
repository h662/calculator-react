export const operate = ({
  operator,
  setOperator,
  result,
  setResult,
  temp,
  setTemp,
}) => {
  switch (operator) {
    case "+":
      setTemp(+temp + +result + "");
      setResult("");
      break;
    case "-":
      setTemp(+temp - +result + "");
      setResult("");
      break;
    case "*":
      setTemp(+temp * +result + "");
      setResult("");
      break;
    case "/":
      setTemp(parseInt(+temp / +result, 10) + "");
      setResult("");
      break;
    default:
      alert("잘못된 연산자입니다.");
  }

  setOperator("");
};
