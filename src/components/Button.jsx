const Button = ({ name, onClickButton, isSubmit }) => {
  return (
    <button
      className={`w-10 h-10 border-b-2 border-r-2 border-black rounded-full flex justify-center items-center  ${
        name === "+"
          ? "bg-red-500"
          : name === "-"
          ? "bg-blue-500"
          : name === "*"
          ? "bg-orange-500"
          : name === "/"
          ? "bg-pink-500"
          : name === "Enter" || name === "Del"
          ? "bg-gray-500 text-white"
          : "bg-gray-50"
      }`}
      onClick={onClickButton}
      type={isSubmit ? "submit" : "button"}
    >
      {name}
    </button>
  );
};

export default Button;
