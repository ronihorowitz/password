import './App.css';
import { useState } from 'react';
import CheckPassword from './CheckPassword';

function App() {
  const [password, setPassword] = useState('')
  const [preventSubmit, setPreventSubmit] = useState(true)

  function handlePassword(event){
    setPassword(event.target.value)
  } 

  return (
    <div className="App">
      <input type = "password" value = {password} onChange = {handlePassword}></input>
      <button disabled = {preventSubmit}>Submit</button>
      <CheckPassword password = {password} prevent = {setPreventSubmit}></CheckPassword>
    </div>
  );
}

export default App;
