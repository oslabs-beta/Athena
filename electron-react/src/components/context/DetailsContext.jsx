import React, { useState, createContext } from 'react';
import stringifyObject from 'stringify-object';

export const DetailsContext = createContext();
//These are the details that define the component that gets rendered on the screen
export const DetailsProvider = ({ children }) => {
  //States for the component in the renderer
  const [compBody, setCompBody] = useState(
    `const var1 = 1
    const handleClick = () => console.log('button clicked')
    const [count, setCount] = useState(1)`
  );
  const [compJSX, setCompJSX] = useState(
    '<button onClick = {handleClick}>Click Me</button>'
  );
  //States for the code written in the code editors, it gets transferred to the states above when we press the update view button in PropsWindow.jsx
  const [ tempCompBody, setTempCompBody ] = useState(
    `const var1 = 1
    const handleClick = () => console.log('button clicked')
    const [count, setCount] = useState(1)`
  );
  const [ tempCompJSX, setTempCompJSX ] = useState(
    '<button onClick = {handleClick}>Click Me</button>'
  );

  return (
    <DetailsContext.Provider
      value={{
        compJSX: [compJSX, setCompJSX],
        compBody: [compBody, setCompBody],
        tempCompBody: [ tempCompBody, setTempCompBody],
        tempCompJSX: [ tempCompJSX, setTempCompJSX ],
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
