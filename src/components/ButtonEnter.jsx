import { operate } from "../lib";
import Button from "./Button";

const ButtonEnter = ({ name }) => {
  return <Button name={name} onClickButton={null} isSubmit={true} />;
};

export default ButtonEnter;
