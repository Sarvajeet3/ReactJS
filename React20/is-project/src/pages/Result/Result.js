import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import axios from "axios";

import "./Result.css";

const Resultpage = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const [ name, setName ] = useState("");
  const [ registraion, setRegistraion ] = useState("");
  const [ authorities, setAuthorities ] = useState("");

  const location = useLocation();
  const image = location.state.image;
  const lab = location.state.lab;

  console.log(image);
  console.log(lab);

  const getMyPostData = async () => {
    setName("Sarvajeet Chavan");
    setRegistraion("2020BCS512");
    setAuthorities("Enter, Use PC");
    /*try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }*/
  };

  // NOTE:  calling the function
  useEffect(async () => {
    await getMyPostData();
    console.log(name);
  }, []);

  return (
    <>
      <div className="flex flex-col text-center w-full mt-8">
        <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Lab Access Control</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white  ">Check for authorities!!</h1>
      </div>

      {isError !== "" && <h2>{isError}</h2>}

      { !name ? 
        <h1>Loading...</h1>
      :
      <div className="grid">
          <div className="card">
            <h1></h1>
            <h2>Name : {name}</h2>
            <h2>Regisatration Number : {registraion}</h2>
            <h2>Authorities in {lab}:</h2>
            <ui>{authorities.split(",").map((authority) => {
              return <li>{authority}</li>;
            })}</ui>
          </div>
      </div>}
    </>
  );
};


export default Resultpage;