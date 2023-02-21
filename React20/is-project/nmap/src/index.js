import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basic' element={<Basic/>}/>
      </Routes>
    </Router>
);

function Home() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);
  const basic = () => {
   
  

  };
  const stealth = () => {
    console.log('stealth:');
  };
  const os = () => {
    console.log('os:');
  };
  
  
  return (
 
  <div className='App'> 
    <h1 className='t1'>
      Nmap Gui
    </h1>
    <input className='textfield' type='Text'/>
    <br/>
    <button onClick={(basic)}className='b1' >
      Basic Scan
    </button>
    <button onClick={stealth} className='b1'>
    Stealth Scan
    </button>
    <button onClick={os}className='b1'>
      OS Scan
    </button>

    
        <h1>Axios Tutorial</h1>
        {isError !== "" && <h2>{isError}</h2>}
  
        <div className="grid">
          {myData.slice(0, 9).map((post) => {
            const { body, id, title } = post;
            return (
              <div key={id} className="card">
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </div>
            );
          })}
          </div>
   

  </div>

  


  );
}

function Basic(){
  return(
    <div><h1>hello</h1></div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
