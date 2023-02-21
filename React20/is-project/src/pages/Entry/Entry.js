import React,{useState
              } from "react";
import {useNavigate} from "react-router-dom";
import Webcam from "react-webcam";
import "./Entry.css"
import axios from "axios";

function Entry() {
    const navigate=useNavigate();
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [post, setPost] = React.useState(false);
    const [lab,setLab] = React.useState("");


    const onCheck = () => {

      // api call
      //let data = {
      //  'name' : 'Sarvajeet Chavan',
      //  'registraion' : '2020BCS507',
      //  'authorities' : 'Enter, Use PC',
      //};
      navigate("/result",{state : { image : imgSrc, lab : lab}});
    }
    

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot({width: 300, height: 300});
      console.log(webcamRef);
      setImgSrc(imageSrc);
      setPost(true);
      var selectedOption = document.lab()
      console.log('imageSrc',imageSrc);
    }, [webcamRef, setImgSrc]);
    return(
        <div className="">
          <div className="flex flex-col text-center w-full mt-8">
            <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Lab Access Control</h2>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <div className="flex flex-row">
                <div className="flex flex-col px-5">
                    <Webcam
                      height={300}
                      width={300}
                      shape
                    
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                    />
                    <button className="btn btn-success button text-white bg-indigo-500" onClick={capture}>
                      Capture photo
                    </button>
                </div>
                <img className="lg:w-2/3 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={imgSrc ? imgSrc : "https://dummyimage.com/720x600"} />
              </div>
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <div className="flex flex-col w-full justify-center">
                  <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                    <label for="hero-field" className="leading-7 text-sm text-white mr-4">Select Lab : </label>
                    <select
                       name="lab" 
                       class="rounded border appearance-none border-gray-300 w-2/3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" 
                       onChange={(e)=>{
                                  const selected= e.target.value;
                                  setLab(selected)
                                }}>
                      <option value="">Select Lab</option>
                      <option value="lab1">ML LAB</option>
                      <option value="lab2">OS LAB</option>
                      <option value="lab3">CG LAB</option>
                      <option value="lab3">CN LAB</option>
                      <option value="lab4">DA LAB</option>
                    </select>
                  </div>
                  <h1>{lab}</h1>
                  {post && <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-24 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-9 w-50" onClick={onCheck}>Check</button>}
                </div>

              </div>
            </div>
          </section>

    </div>
    )
}



export default Entry;