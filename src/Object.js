import React from "react";

class Object extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    saveData(){
     var myuser={name:"Darshan",age:22,gender:"male"}
     var mydata=JSON.stringify(myuser);
     localStorage.setItem('userdata',mydata)
     this.setState({msg:"Saved..!"});
    }
    getData(){
        if(localStorage.getItem('userdata')){
            var mydata=JSON.parse(localStorage.getItem('userdata'));
            console.log(mydata);
            this.setState({name:mydata.name,gender:mydata.gender,age:mydata.age});
        }else{
            this.setState({msg:"No Value"});
        }
    }
    removeData(){
        localStorage.removeItem("userdata");
        this.setState({msg:"Removed..!"});
        this.setState({name:''.name,age:'',gender:''.gender});
    }

    render() {
        return (
            <>
            <h2>Local Storage Using Object</h2>
            <br/>
            {this.state.msg}<br/>
            Name:{this.state.name}<br/>
            Gender:{this.state.gender}<br/>
            Age:{this.state.age}<br/>
            <button onClick={this.saveData.bind(this)}>Save</button>
            <button onClick={this.getData.bind(this)}>Get</button>
            <button onClick={this.removeData.bind(this)}>Remove</button>
            </>
        );
    }
}

export default Object;