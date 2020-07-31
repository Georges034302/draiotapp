import React from "react";
import axios from "axios";
const LEDColor = props => {


    // if the sensor is on or off
    const [btnStatus, setBtnStatus] = React.useState(false)
  const sendDataLed = operation => {


    const formData = {
      color: props.color,
      operation
    };
    axios
      .post("led", {...formData})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return props.color ? (
    <div className="card-body">
      {/* <h4 className="card-title">
        <a style={{ color: props.color }}>Green LED</a>
      </h4> */}
      <button
        onClick={() => {
            setBtnStatus(true)
          sendDataLed("on");
        }}
    
        className={`btn waves-effect waves-light ${btnStatus ? "btn-" + props.color : "btn-outline-" + props.color }`}
      >
        On
      </button>

      <button
        
        onClick={() => {
          sendDataLed("off");
          setBtnStatus(false)
        }}
        className={`btn waves-effect waves-light ${!btnStatus ? "btn-" + props.color : "btn-outline-" + props.color }`}
      >
        Off
      </button>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default LEDColor;
