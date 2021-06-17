
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [count, setCount] = useState(10);//initial value of "count" is 10, the "setCount" if a function that changes this value as i please
  const [isHidden, setisHidden] = useState(false);//initial value of "isHidden" is false, the "setCount" if a function that changes this value as i please

  useEffect(() => {
    if(count === 0 ){
      setisHidden(true);
    }
  },[count]);//when "count" changes, useEffect() runs the function  if(count === 0 ){setisHidden(true)};


  const hendeleCounteronClick = () => setCount(count -1);//here we tell "setCount" what to do;
  return (
  <div className='App'>
    <label>{count} </label>
    {isHidden ? null : <button onClick={hendeleCounteronClick}>Count</button>}   {/*Checkes if isHidden is true or false, if its true return null (returns nothing so the bbutton disapears). 
                                                                                   false puts the button in the DOM*/}
  </div>
  );
}

export default App;
