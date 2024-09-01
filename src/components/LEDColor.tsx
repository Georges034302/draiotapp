import React from "react";
// import axios from "axios";
const LEDColor = (props: { color: string; }) => {


    // if the sensor is on or off
    const [btnStatus, setBtnStatus] = React.useState(false)
  const sendDataLed = (operation: string) => {


    const formData = {
      color: props.color,
      
      operation
    };
  //   axios
  //     .post("led", {...formData})
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  };

  return props.color ? (
    <div className="card-body text-center ledspacing">
      <button onClick={() => { sendDataLed("off"); setBtnStatus(false); }}
        className={`btn btn-sm waves-effect waves-light ${!btnStatus ? "btn-" + props.color : "btn-outline-" + props.color }`}>
        Off
      </button>
      <button onClick={() => { setBtnStatus(true); sendDataLed("on"); }}
        className={`btn btn-sm waves-effect waves-light ${btnStatus ? "btn-" + props.color : "btn-outline-" + props.color}`}>
        On
      </button>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default LEDColor;
