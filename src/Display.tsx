import React, { useContext } from "react";
import useCountContext from "./Context/useCountContext";

const Display = () => {
  const { count } = useCountContext();

  return (
    <div>
     {count}
    </div>
  );
};
export default Display;