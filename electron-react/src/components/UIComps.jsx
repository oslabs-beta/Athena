import React, {useState, useContext} from 'react';
import { useUserCompContext } from '@/hooks/useUserCompContext';
import { CompUIContext } from './context/CompUIContext';
const { ipcRenderer } = require('electron');

const UIComps = ({bg, addNode, removeNode}) => {
  const {components, dispatch} = useUserCompContext();
  const { compsUI } = useContext(CompUIContext);
  const [ compsUIVal, setCompsUIVal ] = compsUI;
  const [ bgColor, setBgColor ] = bg;
  const [ bgColorIn, setBgColorIn ] = useState(bgColor);

   
  return(
    <div className = 'saved-comp-page'>
      <h1>Saved Components</h1>
      <div id = 'flow-info'>
        <input id = 'flow-background-input' onChange = {(e) => setBgColorIn(e.target.value)} value = {bgColorIn}/>
        <button id = 'flow-background-submit' onClick = {() => setBgColor(bgColorIn)}>Change BG Color</button>
      </div>
      <div className = 'saved-comps'>
        {components.length > 0 && components.map( (component) => (
          <div key = {component.name} className = 'saved-comp-container'>
            <span className = 'comp-container-name'>{component.name}</span>
            <button onClick = {() => addNode(component)}>Add </button>
            <button onClick = {() => removeNode(component)}> Remove </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIComps;