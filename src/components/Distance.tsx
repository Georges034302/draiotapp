import React from "react";
import PusherClient from "../store/Pusher";
import axios from "axios";
import "./sensors.css";
// 'ultra-channel', 'ultra-data-event'
const Distance = () => {
  const [data, setData] = React.useState("0");

  const [convert, setConvert] = React.useState("CM")

  const [btnStatus, setStatus] = React.useState(false)

  React.useEffect(() => {
    const pusher = PusherClient.pusherClient;

    const channel = pusher.subscribe("ultra-channel");
    channel.bind("ultra-data-event", (data: any) => {
      const response = JSON.stringify(data);
      try {
          let floatValue: number = parseFloat(response)
          let value: string = floatValue.toFixed(2)
          if(convert === 'M') {
            let meterValue: number = parseFloat(value)
            meterValue /= 100
          
              setData(meterValue.toFixed(4))

          } else if (convert === 'CM'){
            setData(value)
          }

      } catch(e) {
        setData('0');
      }

    });
  }, [convert]);

  React.useEffect(() => {
    axios.get('/ultra')
    .then(res => {
      //setStatus(res.data.status)
    })
    .catch(err => console.log(err))
  }, [])

  const sendDataLed = (operation: string) => {
    const formData = {
      operation
    };
    axios
      .post("ultra", { ...formData })
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
          <h4>Position Sensor  
              <button onClick={() => {sendDataLed("on");setStatus(true) }} className={`btn btn-sm waves-effect waves-light float-right ${btnStatus ? "btn-blue": "btn-outline-blue" }`}>
                On
              </button>
              <button onClick={() => {sendDataLed("off"); setStatus(false); setData('0')}}className={`btn btn-sm waves-effect waves-light float-right ${!btnStatus ? "btn-blue": "btn-outline-blue" }`}>
                  Off
              </button>
          </h4>   
        </div> 
        <div className="card-body">          
          <h5>Sensor Reading:
          <button className={`btn btn-sm btn-outline-danger ${data}`} style={{ borderRadius: '45%' }}>--</button>                  
          <span className="dropdown float-right"> Unit:
              <button className="btn btn-info btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {convert}
              </button>
              <div className="dropdown-menu dropdown" aria-labelledby="dropdownMenuButton">
                <a  onClick={() => {setConvert('M')}} className="dropdown-item"><small>M</small></a>
                <a  onClick={() => {setConvert('CM')}} className="dropdown-item" ><small>CM</small></a>              
              </div>                     
            </span>   
            </h5> 
          </div>            
      </div>    
  );
};
export default Distance;
