import { useEffect, useState } from "react";

import Result from "./Result";
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";
import ButtonEnter from "./ButtonEnter";
import ButtonDelete from "./ButtonDelete";
import { operate } from "../lib";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState("");
  const [operator, setOperator] = useState("");

  const onSubmitButtonEnter = (e) => {
    e.preventDefault();

    operate({ operator, setOperator, result, setResult, temp, setTemp });
  };

  useEffect(() => {
    if (result[0] === "0") {
      if (result.length !== 1) {
        setResult(result.substring(1));
      }
    }
  }, [result]);

  return (
    <form className="bg-gray-300  shadow-md" onSubmit={onSubmitButtonEnter}>
      <Result
        result={result}
        setResult={setResult}
        temp={temp}
        operator={operator}
      />
      <div className="grid grid-cols-4 gap-2 m-4">
        <ButtonNumber name="1" result={result} setResult={setResult} />
        <ButtonNumber name="2" result={result} setResult={setResult} />
        <ButtonNumber name="3" result={result} setResult={setResult} />
        <ButtonOperator
          name="+"
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
          operator={operator}
          setOperator={setOperator}
        />
        <ButtonNumber name="4" result={result} setResult={setResult} />
        <ButtonNumber name="5" result={result} setResult={setResult} />
        <ButtonNumber name="6" result={result} setResult={setResult} />
        <ButtonOperator
          name="-"
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
          operator={operator}
          setOperator={setOperator}
        />
        <ButtonNumber name="7" result={result} setResult={setResult} />
        <ButtonNumber name="8" result={result} setResult={setResult} />
        <ButtonNumber name="9" result={result} setResult={setResult} />
        <ButtonOperator
          name="*"
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
          operator={operator}
          setOperator={setOperator}
        />
        <ButtonEnter name="Enter" />
        <ButtonNumber name="0" result={result} setResult={setResult} />
        <ButtonDelete name="Del" result={result} setResult={setResult} />
        <ButtonOperator
          name="/"
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
          operator={operator}
          setOperator={setOperator}
        />
      </div>
    </form>
  );
};

export default Calculator;
