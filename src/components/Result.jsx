const Result = ({ result, temp }) => {
  return (
    <div className="bg-gray-50 px-6 h-12 flex items-center text-2xl">
      {result ? result : temp ? temp : ""}
    </div>
  );
};

export default Result;
