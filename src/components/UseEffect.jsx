import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Render the timer and buttons in the component
  return (
    <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center">
      <h3>Timer: {count} </h3>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Reanudar" : "Pausar"}
      </button>
      <button
        onClick={() => {
          setCount(0);
          setIsPaused(true);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default UseEffectHook;
