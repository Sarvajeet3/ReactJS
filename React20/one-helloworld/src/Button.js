import React from "react";
import "./style.css";
const CreateButton = ({bname="DefaultName"}) =>(
<textarea className="button" style={{textAlign:'center'}}>
{bname}
</textarea>
);
export default CreateButton;