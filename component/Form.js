import React,{Component} from "react";

class Form extends Component{

    state={
        inputvalue:"",
        comments:"",
        topic:"react"
    }

    onhandlechange =(event)=>{

     this.setState({
       [event.target.name] :event.target.value
     })
    }
    changetext = (event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    changetopic = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }

submit=(event)=> {
   
   alert(`${this.state.firstname},${this.state.lastname},${this.state.age},${this.state.comments},${this.state.topic}`)
}
    render(){

    return (
    <div>
        <h2>Form Component</h2>
        <form onSubmit={this.submit}>
        <label>Firstname</label>
        <input type="text" name="firstname"  value={this.firstname} onChange={this.onhandlechange}/>
        <label>lastname</label>
        <input type="text" name="lastname" value={this.lastname} onChange={this.onhandlechange}/>
        <label>age</label>
        <input type="number" name="age" value={this.age} onChange={this.onhandlechange}/>

        
        <div>
            <label>Topic</label>
            <textarea value={this.state.comments} onChange={this.changetext}></textarea>
        </div>
        <div>
            <select value={this.state.topic} onChange={this.changetopic}>
                <option>React</option>
                <option>Angular</option>
                <option>Javascrip</option>
            </select>
        </div>
        <button type="submit" >Submit</button>

        </form>
       </div>
    )
    }
}

export default Form;