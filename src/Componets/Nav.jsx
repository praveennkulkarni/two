// import React, { useEffect, useState } from "react";
// import "./Nav.css";
// const Nav = () => {
//   let [count, setCount] = useState(0);
//   let [intervalId, setIntervalId] = useState("null");

//   let handelRest = () => {
//     clearInterval(intervalId);
//     setCount(0);
//   };

//   let handelStart = () => {
//     clearInterval(intervalId);

//     let newSetInterval = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     setIntervalId(newSetInterval);
//   };

//   useEffect(() => {
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [intervalId]);
//   return (
//     <div>
//       <h1>count:{count}</h1>

//       <button onClick={handelRest}>Reset</button>
//       <button onClick={handelStart}>start</button>
//     </div>
//   );
// };

// export default Nav;

import React, { useEffect, useState } from "react";

const Nav = () => {
  let [count, setCount] = useState(0);
  let [intervalId, setIntervalId] = useState(null);

  let handelReset = () => {
    clearInterval(intervalId);
    setCount(0);
  };

  let handleStart = () => {
    clearInterval(intervalId);
    let newInterval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalId(newInterval);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handelReset}>Reset</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Nav;
