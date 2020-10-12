import React from "react";
import Segment from "../components/Segment";
import LED from "../components/LED";
import Motion from "../components/Motion";
import Distance from "../components/Distance";
import Authentication from "../hoc/Authentication";
interface SensorProps {
  
}

const Sensor: React.FC<SensorProps> = props => {

  return (
    <React.Fragment>
      {/* <Jumbo setAuth={props.setAuth} /> */}
      
      <div className="container p-2">
        <div className="row">
          <div className="col-lg-6 col-12 col-sm-12 mt-3">
            <Distance />
          </div>
          <div className="col-lg-6 col-12 col-sm-12 mt-3">
            <Motion />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 col-12 col-sm-12 mt-3">
            <LED />
          </div>

          <div className="col-lg-6 col-12 col-sm-12 mt-3">
            <Segment />
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default Sensor;
