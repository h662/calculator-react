import Button from "./Button";

const ButtonNumber = ({ name, result, setResult }) => {
  const onClickButton = () => {
    if (result.length >= 17) return;

    setResult(result + name);
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonNumber;
