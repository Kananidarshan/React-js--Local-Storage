import React from "react";

function Function(){
    const [name,setName]=React.useState('LocalStorage');

    const setData=()=>{
        setName('Value is set');
        localStorage.setItem("name","Darshan");
    }
    const getData=()=>{
        let a=localStorage.getItem("name");
        setName('Value is '+a);
    }
    const removeData=()=>{
        localStorage.removeItem("name");
        setName("Name is Removed..!");
    }

    return(
        <div>
            {name}
            <br/>
            <button onClick={setData}>Set</button>
            <button onClick={getData}>Get</button>
            <button onClick={removeData}>Remove</button>
        </div>
    );
}
export default Function;