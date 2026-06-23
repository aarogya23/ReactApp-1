import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">
        Counter
      </h1>

      <div className="h-[80vh] flex flex-col justify-center items-center gap-8 text-4xl">
        <p>Count: {count}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;