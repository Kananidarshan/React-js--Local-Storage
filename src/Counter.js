import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        let mydata=localStorage.getItem("counter");
        if(mydata){
            this.setState({txt1:parseInt(mydata)});
        }else{
            this.setState({txt1:0});
        }
    }
    incriment(){
        let mydata=localStorage.getItem("counter");
        if(mydata){
            var no=parseInt(mydata)+1;
            this.setState({txt1:no});
            localStorage.setItem("counter",no);
        }else{
            localStorage.setItem("counter",0);
            this.setState({txt1:0});
        }
    }
    dicrement(){
        let mydata=localStorage.getItem("counter");
        if(mydata){
            var no=parseInt(mydata)-1;
            this.setState({txt1:no});
            localStorage.setItem("counter",no);
        }else{
            localStorage.setItem("counter",0);
            this.setState({txt1:0});
        }
    }
    remove(){
        localStorage.removeItem("counter");
        this.setState({txt1:"Data Removed..!"});
    }
    render() {
        return (
        <div>
            <h2>COUNTER</h2>
            <br/>
            Counter :{this.state.txt1}
            <button onClick={this.incriment.bind(this)}>Incriment</button>
            <button onClick={this.dicrement.bind(this)}>Dicriment</button>
            <button onClick={this.remove.bind(this)}>Remove</button>
        </div>        
        );
    }
}

export default Counter;