import Button from "./Button";

const ButtonDelete = ({ name, result, setResult }) => {
  const onClickButton = () => {
    setResult(result.substring(0, result.length - 1));
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonDelete;
