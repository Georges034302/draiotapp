import React from "react";
import User from "../store/User";

interface JumboProps {
  setAuth: any;
}

const Jumbo: React.FC<JumboProps> = props => {
  return (
    <div className="container-fluid mt-3">
      <div className="jumbotron">
        <h1>Sensors Controller</h1>

        <button 
        onClick={() => {
          User.clear();
          props.setAuth(false)
        }} 
        className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default Jumbo;
