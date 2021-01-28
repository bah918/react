
import React from "react";

class Box extends React.Component {
  
  render() {
    const {icon,color,value,unit,min,max}=this.props;
    if(icon==="local_drink"){
      return (
        <div className="box col-sm-3 col6">
            <span className="material-icons" style={{ fontSize: 100, color: color }} >
              {icon}
            </span>
            <p>{value} {unit}</p>
        </div>
      );


    }else{
      return (
        <div className="box col-sm-3 col6">
            <span className="material-icons" style={{ fontSize: 100, color: color }} >
              {icon}
            </span>
            <p>{this.props.value} {this.props.unit}</p>
            <input type="range" min="" max="" value="" onInput="" />
        </div>

      );
    }
   
  }
}

export default Box;
