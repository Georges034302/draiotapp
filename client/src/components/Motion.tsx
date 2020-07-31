import React from "react";
import PusherClient from "../store/Pusher";
import axios from "axios";
const Motion = () => {
  const [data, setData] = React.useState("0");
  const [btnStatus, setStatus] = React.useState(false)

  const [detected, setDetected] = React.useState(false)

  React.useEffect(() => {
    const pusher = PusherClient.pusherClient;

    const channel = pusher.subscribe("motion-channel");
    channel.bind("motion-data-event", data => {
      const response = data;

      if(response === "DETECTED") {
        setDetected(true)
        setData(response)
      } else {
        setDetected(false)
        setData("None")
      }
      // setData(response);
    });

    fetchAPI()
    
  }, []);

  const fetchAPI = () => {
    axios.get('/pir')
    .then((res) => {
      setStatus(res.data.status)
    })
    .catch(err => console.log(err))
  }

  const sendDataLed = operation => {
    const formData = {
      operation
    };
    axios
      .post("pir", { ...formData })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <a>Motion</a>
        </h4>

        <h4 className="card-title">
          {/* <a>Data: {data}</a> */}
          <button
           className={`btn ${detected ? "btn-danger": "btn-outline-danger" }`}
          style={{ borderRadius: '45%' }}>o</button>
        </h4>

        <button
          onClick={() => {
            sendDataLed("on");
            setStatus(true)
          }}
          className={`btn waves-effect waves-light ${btnStatus ? "btn-blue": "btn-outline-blue" }`}
        >
          On
        </button>
        <button
          onClick={() => {
            sendDataLed("off");
            setStatus(false)
            setDetected(false)
          }}
          className={`btn waves-effect waves-light ${!btnStatus ? "btn-blue": "btn-outline-blue" }`}
        >
          Off
        </button>
      </div>
    </div>
  );
};

export default Motion;
