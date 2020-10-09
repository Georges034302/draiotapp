import React from "react";
import PusherClient from "../store/Pusher";
import axios from "axios";
// 'ultra-channel', 'ultra-data-event'
const Distance = () => {
  const [data, setData] = React.useState("0");

  const [convert, setConvert] = React.useState("CM")

  const [btnStatus, setStatus] = React.useState(false)

  React.useEffect(() => {
    const pusher = PusherClient.pusherClient;

    const channel = pusher.subscribe("ultra-channel");
    channel.bind("ultra-data-event", data => {
      const response = JSON.stringify(data);
      try {
          let floatValue: number = parseFloat(response)
          let value: string = floatValue.toFixed(2)
          if(convert === 'M') {
            let meterValue: number = parseFloat(value)
            meterValue /= 100
          
            // floatValue /= 100
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
      setStatus(res.data.status)
    })
    .catch(err => console.log(err))
  }, [])

  const sendDataLed = operation => {
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
        <h4 className="card-title">
          <a>Distance</a>
        </h4>

        <h4 className="card-title">
          <a>Data: {data}</a>
        </h4>

        <div className="dropdown">
          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {convert}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
            onClick={() => {
              setConvert('M')
            }}
            className="dropdown-item">
              M
            </a>
            <a 
               onClick={() => {
                setConvert('CM')
              }}
            className="dropdown-item" >
              CM
            </a>
        
          </div>
        </div>


{/* ON OFF BTN */}
        <button
          onClick={() => {
            sendDataLed("on");
            setStatus(true)
          }}
          // className="btn btn-outline-blue"
          className={`btn waves-effect waves-light ${btnStatus ? "btn-blue": "btn-outline-blue" }`}

        >
          On
        </button>

        <button
          onClick={() => {
            sendDataLed("off");
            setStatus(false)
            setData('0')

          }}
          className={`btn waves-effect waves-light ${!btnStatus ? "btn-blue": "btn-outline-blue" }`}
        >
          Off
        </button>
      </div>
    </div>
  );
};

export default Distance;
