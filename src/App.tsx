import React, { useState } from "react";
import Child from "./Child";
import Display from "./Display";
import { Provider } from "./Context"


const App = () => {
 
  
  return (
    <Provider>
      <Child />
      <Display />
    </Provider>
  );
};

export default App;