import React,{useState} from "react";
import "./App.css"

const App = () => {
  const [count,setCount] = useState(0);
  return(
    <div className="App">
      <h1>Counter App using State/Hooks</h1>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <button onClick={() => (count > 9? "" : setCount(count + 1))}>Increase Count</button>
      <button onClick={() => (count < 1? "" : setCount(count - 1))}>Decrease Count</button>
    </div>
  )
}

export default App;