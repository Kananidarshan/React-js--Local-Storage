import React from "react";

function Demo(){

    const [name,setName]=React.useState("");

    React.useEffect(()=>{
        getData();
    },[]);

    function setData(){
        localStorage.setItem("name","darshan");
        setName("Name is saveed..!!");
    }
    function getData(){
        var a=localStorage.getItem("name");
        if(a){
            setName("Name is "+a);
        }else{
            setName("Name is not Found..!");
        }
    }
    function removeData(){
        localStorage.removeItem("name");
        setName("value is Removed..!");
    }
    return(
        <>
        <h2> Local Storage </h2>
        <br/>
        {name}
        <br/>
        <button onClick={setData}>Save</button>
        <button onClick={getData}>Get</button>
        <button onClick={removeData}>Remove</button>
        </>
    )
}
export default Demo;