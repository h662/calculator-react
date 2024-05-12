import { operate } from "../lib";
import Button from "./Button";

const ButtonOperator = ({
  name,
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onClickButton = () => {
    if (temp) {
      operate({ operator, setOperator, result, setResult, temp, setTemp });
    } else {
      setTemp(result);
      setResult("0");
    }
    setOperator(name);
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonOperator;
