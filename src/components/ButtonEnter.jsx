import { operate } from "../lib";
import Button from "./Button";

const ButtonEnter = ({
  name,
  operator,
  setOperator,
  result,
  setResult,
  temp,
  setTemp,
}) => {
  const onClickButton = () => {
    operate({ operator, setOperator, result, setResult, temp, setTemp });
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonEnter;
