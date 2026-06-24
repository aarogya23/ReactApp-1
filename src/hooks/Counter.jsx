import { useEffect } from "react";
import React, { useState }from "react";


const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);




  //UseEffect
  // to show side effect when state changes
  // useEffect(function, [dependency]){

    //  function -> side effect to show when state changes
    //  dependency -> state that trigger the function

    // useEffect (()=>{}, []) -> effect fis seen on page load only

  
  // }

  useEffect(()=>{
    alert("value Updated")
  },[count , data])

  const lower = () =>{

     if (data > 0) {
      setData(data - 10);
    }

  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () =>{

    setCount(0);

  }

  const reset1 = () =>{

    setData(0);

  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">
        Counter
      </h1>

      <div className="h-[80vh] flex flex-col justify-center items-center gap-8 text-4xl">
        <p>Count: {count}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Reset
        </button>
      </div>
       <div className="h-[80vh] flex flex-col justify-center items-center gap-8 text-4xl">
        <p>Data: {data}</p>

        <button
          onClick={() => setData(data + 10)}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
        >
          Increment
        </button>

        <button
          onClick={lower}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={reset1}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;