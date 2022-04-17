import React, { useContext } from "react";
import { useCountContext } from "./Context";

const Child = () => {
  const { incrementCountHandler, decrementCountHandler } = useCountContext();

  return (
    <div>
      <button onClick={incrementCountHandler}>Increment</button>
      <button onClick={decrementCountHandler}>Decrement</button>
    </div>
  );
};
export default Child;