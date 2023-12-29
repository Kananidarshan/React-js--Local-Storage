import React from "react";

class Storage2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txt1:""
        }
    };
    //on Load Cheak Data
    componentDidMount(){
        let mydata=localStorage.getItem("name");
        if(mydata){
            this.setState({txt1:mydata});
        }else{
            this.setState({txt1:"Data is not set..!"});
        }
    }
    setData(){
        var name="darshan";
        localStorage.setItem("name","darshan");
        this.setState({txt1:name});
        alert("Data is set..!!")
    }
    getData(){
        let mydata=localStorage.getItem("name");
        if(mydata){
            this.setState({txt1:mydata});
            alert("Data is "+mydata);
        }else{
            this.setState({txt1:"Data is not Set"});
            alert("Data is not set");
        }
    }
    removeData(){
        localStorage.removeItem("name");
        this.setState({txt1:"Data Rememoved..!"});
        alert("Data are remove from localStorage..!!")
    }
    render(){
        return(
            <> 
            <h2>Local Stored</h2>
            Value is :{this.state.txt1}
            <br/>
            <button onClick={this.setData.bind(this)}>Set</button>
            <button onClick={this.getData.bind(this)}>Get</button>
            <button onClick={this.removeData.bind(this)}>Remove</button>
            </>
        )
    }
}
export default Storage2;