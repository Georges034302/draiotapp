import React from "react";
import LEDColor from "./LEDColor";
const LED = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <a>LED</a>
        </h4>
      </div>
      {/* RED LED */}
      <LEDColor color="red" />
      {/* <div className="card-body">
        <h4 className="card-title">
          <a style={{ color: "red" }}>Red LED</a>
        </h4>
        <button className="btn btn-red">On</button>

        <button className="btn btn-red">Off</button>
      </div> */}
      {/* BLUE LED */}
      <LEDColor color="blue" />
      {/* <div className="card-body">
        <h4 className="card-title">
          <a style={{ color: "blue" }}>Blue LED</a>
        </h4>
        <button className="btn btn-blue">On</button>

        <button className="btn btn-blue">Off</button>
      </div> */}

      {/* Yellow LED */}
      <LEDColor color="yellow" />

      {/* <div className="card-body">
        <h4 className="card-title">
          <a style={{ color: "#ada61f" }}>Yellow LED</a>
        </h4>
        <button className="btn btn-yellow">On</button>

        <button className="btn btn-yellow">Off</button>
      </div> */}

      {/* Green LED */}
      <LEDColor color="green" />

      {/* <div className="card-body">
        <h4 className="card-title">
          <a style={{ color: "green" }}>Green LED</a>
        </h4>
        <button className="btn btn-green">On</button>

        <button className="btn btn-green">Off</button>
      </div> */}
    </div>
  );
};

export default LED;
