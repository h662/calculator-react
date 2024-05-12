const Result = ({ result, setResult, temp, operator }) => {
  const onChangeResult = (e) => {
    const regex = /^[0-9]*$/;

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
