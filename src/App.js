import React,{useState} from "react"

import logo from './logo.svg';
import './App.css';

const App =  () => {
  const [textValue,setTextValue] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Caracteres</h1>
        <p>Digite no espaço abaixo</p>
        <textarea value={textValue} onChange={(event) => setTextValue(event.target.value)}/>

        <p>Contador: {textValue.length}</p>
      </header>
    </div>
  );
}

export default App;
