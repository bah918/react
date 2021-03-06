import React from "react";
import './App.css';
import "./style/global.css";
import Box from "./components/Box";
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
     constructor(props){
       super(props);
        this.state={
          water:0,
          heart:120,
          temperature:-10,
          steps:3000
        };
     }
  render() {
    return (
      <div>
        <div className="row">
          <p>heart:{heartMin}</p>
          <p>temperature:{heartMin}</p>
          <p>steps:{stepsMin}</p>
          <Box icon={"local_drink"} color={"#3A85FF"} value= {1.5} unit={"L"}/>
          <Box icon={"directions_walk"} color= {"black"} value= {3000} unit="steps"/>
          <Box icon={"favorite"} color={"red"} value= {120} unit={"bpm"}/>
          <Box icon={"wb_sunny"} color={"yellow"} value= {-10} unit={"°C"}/>
        </div>
       
      </div>

    );
  }
}

export default App;
