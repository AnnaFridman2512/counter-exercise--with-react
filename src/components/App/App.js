
import './App.css';
import { useState } from 'react';
function App() {

  const [count, setCount] = useState(10);
 

  return (
  <div className='App'>
    <label for="counterBtn">{count} </label>
    <button id="counterBtn" onClick={() => setCount(count + 1)}>Count</button>
  </div>
  );
}

export default App;
