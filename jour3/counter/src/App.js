
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      
    };
  }
  decrementCount=()=>{
    this.setState({count: this.state.count - 1 });
  }
  incrementCount=()=>{
    this.setState({count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        
        
           <h1>Counter</h1>
           <button style={{background:"green"}} onClick={()=>{this.decrementCount()}}>-</button>
           <h2>{this.state.count}</h2>
           <button style={{background:"red"}} onClick={()=>{this.incrementCount()}}>+</button>
           
      </div>
    );
  }
}

export default App;
