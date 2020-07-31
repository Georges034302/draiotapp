import React from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
// import validator from 'validator';
import SimpleReactValidator from "simple-react-validator";
import PusherClient from "../store/Pusher";

const validator = new SimpleReactValidator();

const Segment: React.FC = () => {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(false);

  //   force update component
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [btnStatus, setStatus] = React.useState(false)


  const [data, setData] = React.useState("0000");

  let inputRef: any = React.useRef();

  React.useEffect((): void => {
  
    const pusher = PusherClient.pusherClient;

    const channel = pusher.subscribe("segment-channel");
    channel.bind("segment-data-event", data => {
      const response = JSON.stringify(data);
      if(data)
        setData(response);
    });
  }, []);

  const toggleOnOff = (operation: string) => {
    let url: string = "/segment-display";
    axios
      .post(url, { operation })
      .then(res => {
        NotificationManager.success("Success", "Sent");
      })
      .catch(err => {
        NotificationManager.error("Error", "Something went wrong");
      });
  };

  const displayNumbers = (numbers: string) => {
    if (!validator.allValid()) {
      forceUpdate();
      validator.showMessages();
      return;
    } else {
      let url: string = "/segment-display/numbers";
      let submit: number = parseInt(numbers);
      axios
        .post(url, { numbers: JSON.stringify(submit) })
        .then(res => {
          NotificationManager.success("Success", "Sent");
        })
        .catch(err => {
          NotificationManager.error("Error", "Something went wrong");
        })
        .finally(() => {
          setInput("");

          validator.hideMessages();
          forceUpdate();
          // inputRef.c = "";
        });
    }
  };

  React.useEffect(() => {
      axios.get('/segment-display')
      .then((res) => {
 
        setStatus(res.data.status)
   
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <a>Segment</a>
        </h4>
        <h4 className="card-title">
          <a>Data: {data}</a>
        </h4>
        <button 
        
        className={`btn waves-effect waves-light ${btnStatus ? "btn-blue": "btn-outline-blue" }`}
        
        
        onClick={() => {
          toggleOnOff("on")
          setStatus(true)
        }
        }
        
        >
          On
        </button>

        <button 
          className={`btn waves-effect waves-light ${!btnStatus ? "btn-blue": "btn-outline-blue" }`}
         
          onClick={() => {
            toggleOnOff("off")
            setStatus(false)
            setData('0000')
          }
          }
         >
          Off
        </button>

        <div className="mt-2">
          <form
            onSubmit={e => {
              e.preventDefault();

              displayNumbers(input);
            }}
          >
            <div className="form-group">
              <label>Display numbers</label>
              <input
                disabled={btnStatus ? false: true}
                ref={inputRef}
                // onBlur={() => validator.showMessageFor("numbers")}
                name="numbers"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="form-control"
              />
              {validator.message("numbers", input, "required|numeric|max:4")}
            </div>
            <button
              onClick={() => {
                validator.showMessages();
              }}
              className="btn btn-outline-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Segment;
