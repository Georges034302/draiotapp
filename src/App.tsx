import React, { useEffect } from "react";
import "./App.css";
import Sensor from "./pages/Sensor";

// import Pusher from "pusher-js";
import { NotificationContainer } from "react-notifications";

const App: React.FC = () => {

 
  return (
    <React.Fragment>      
      <Sensor />
      <NotificationContainer />
    </React.Fragment>
  );
};

export default App;
