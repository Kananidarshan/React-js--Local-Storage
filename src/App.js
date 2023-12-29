import React from "react";
import Color from "./Color";
// import Demo from "./Demo";
// import Counter from "./Counter";
// import Storage2 from "./Storage2";
// import Object from "./Object";
// import Function from "./Function";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  setData(){
    localStorage.setItem("name","Darshan");
    alert("Data Stored..!!");
  }
  getData(){
    let mydata=localStorage.getItem("name");
    if(mydata){
      alert("Your data is"+mydata);
    }else{
      alert("NO Data Found..!");
    }

  }
  removeData(){
    localStorage.removeItem("name");
    alert("Data are Removed from the Localstorage.")
  }
  render() {
    return (
      
      <>
      
      {/* <button onClick={this.setData.bind(this)}>SetData</button>
      <button onClick={this.getData.bind(this)}>GetData</button>
      <button onClick={this.removeData.bind(this)}>Remove</button> */}
      {/* <Storage2/>
      <Object/> */}
    {/* <Function/> */}
    {/* <Counter/> */}
      {/* <Demo/> */}
      <Color/>
      </>
    );
  }
}

export default App;