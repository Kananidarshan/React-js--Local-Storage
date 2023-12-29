import { useState } from "react";
function Color(){
const [bgcolor,setBgcolor]=useState("");

const handleClick=(color)=>{
    localStorage.setItem("color",color);
    setBgcolor(color);
};

return(
    <div style={{backgroundColor:localStorage.getItem("color"),height:500}}>
    <button onClick={()=>handleClick("red")}>Red</button>
    <button onClick={()=>handleClick("Yellow")}>Yellow</button>
    <button onClick={()=>handleClick("blue")}>Blue</button>
    </div>
)
}
export default Color;