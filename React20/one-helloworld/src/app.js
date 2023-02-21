import React from 'react';
import "./style.css"
import CreateButton from "./Button"

const Hello=() => {
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Hello World !!</h1>
            <CreateButton bname="Play store"/>
            <CreateButton bname="App store"/>
            
            <CreateButton/>
        </div>
        
    )
}

export default Hello;