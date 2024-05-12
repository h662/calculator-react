import { operate, setOperate } from "../lib";
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
    setOperate({
      operator,
      setOperator,
      result,
      setResult,
      temp,
      setTemp,
      name,
    });
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonOperator;
