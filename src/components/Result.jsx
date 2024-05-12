import { setOperate } from "../lib";

const Result = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onChangeResult = (e) => {
    const regex = /^[0-9]*$/;

    const lastKeyInput = e.target.value.substring(e.target.value.length - 1);

    if (
      lastKeyInput === "+" ||
      lastKeyInput === "-" ||
      lastKeyInput === "*" ||
      lastKeyInput === "/"
    ) {
      setOperate({
        operator,
        setOperator,
        result,
        setResult,
        temp,
        setTemp,
        name: lastKeyInput,
      });
    }

    if (!regex.test(e.target.value)) return;

    setResult(e.target.value);
  };

  return (
    <div className="bg-gray-50 px-6 h-16 flex flex-col justify-center">
      {temp && (
        <div>
          {temp} {operator}
        </div>
      )}
      <input className="text-2xl" value={result} onChange={onChangeResult} />
    </div>
  );
};

export default Result;
