import Button from "./Button";

const ButtonOperator = ({ name, result, setResult, setTemp, setOperator }) => {
  const onClickButton = () => {
    setTemp(result);
    setResult("0");
    setOperator(name);
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonOperator;
