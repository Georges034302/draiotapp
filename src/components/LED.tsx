import React from "react";
import LEDColor from "./LEDColor";
const LED = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4>
          <a>LED Sensors</a>
        </h4>
      </div>
      
      <LEDColor color="red" />      
    
      <LEDColor color="blue" />
   
      <LEDColor color="yellow" />      
   
      <LEDColor color="green" />      
    </div>
  );
};

export default LED;
