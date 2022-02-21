import React, { useState, useCallback } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (method) => {
    if (method === "add") {
      setCounter((pv) => pv + 1);
    }
  };

  const increment = useCallback(() => {
    console.log("++");
    // updateCounter("add");
    setCounter((pv) => pv + 1);
  }, []);

  const decrement = useCallback(() => {
    // console.log("--");
    setCounter((pv) => pv - 1);
  }, []);

  return { counter, increment, decrement };
}

export default useCounter;
