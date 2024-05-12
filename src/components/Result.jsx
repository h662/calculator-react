const Result = ({ result, temp, operator }) => {
  return (
    <div className="bg-gray-50 px-6 h-16 flex flex-col justify-center">
      {temp && (
        <div>
          {temp} {operator}
        </div>
      )}
      <div className="text-2xl">{result}</div>
    </div>
  );
};

export default Result;
