import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import SimpleReactValidator from "simple-react-validator";
import PusherClient from "../store/Pusher";

// Initialize the validator
const validator = new SimpleReactValidator();

const Segment: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [btnStatus, setStatus] = useState<boolean>(false);
  const [data, setData] = useState<string>("0000");

  const inputRef = useRef<HTMLInputElement>(null);

  // Function to force update the component
  const [, updateState] = useState<unknown>();
  const forceUpdate = useCallback(() => updateState({}), []);

  // Effect to handle Pusher subscription
  useEffect(() => {
    const pusher = PusherClient.pusherClient;
    const channel = pusher.subscribe("segment-channel");

    channel.bind("segment-data-event", (data: any) => {
      const response = JSON.stringify(data);
      if (data) {
        setData(response);
      }
    });

    // Cleanup the subscription on component unmount
    return () => {
      pusher.unsubscribe("segment-channel");
    };
  }, []);

  // Function to toggle the display
  const toggleOnOff = (operation: string) => {
    axios
      .post("/segment-display", { operation })
      .then(() => {
        NotificationManager.success("Success", "Sent");
      })
      .catch(() => {
        NotificationManager.error("Error", "Something went wrong");
      });
  };

  // Function to display numbers
  const displayNumbers = (numbers: string) => {
    if (!validator.allValid()) {
      forceUpdate();
      validator.showMessages();
      return;
    }

    const url = "/segment-display/numbers";
    const submit = parseInt(numbers, 10);

    axios
      .post(url, { numbers: JSON.stringify(submit) })
      .then(() => {
        NotificationManager.success("Success", "Sent");
      })
      .catch(() => {
        NotificationManager.error("Error", "Something went wrong");
      })
      .then(() => {
        setInput("");
        validator.hideMessages();
        forceUpdate();
      });
  };

  // Effect to fetch initial button status
  useEffect(() => {
    axios
      .get("/segment-display")
      .then((res) => {
        //setStatus(res.data.status);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h4>
          <span>Segment Sensor</span>
          <button
            className={`btn btn-sm waves-effect waves-light float-right ${btnStatus ? "btn-blue" : "btn-outline-blue"}`}
            onClick={() => { toggleOnOff("on"); setStatus(true); }}
          >
            On
          </button>
          <button
            className={`btn btn-sm waves-effect waves-light float-right ${!btnStatus ? "btn-blue" : "btn-outline-blue"}`}
            onClick={() => { toggleOnOff("off"); setStatus(false); setData("0000"); }}
          >
            Off
          </button>
        </h4>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => { e.preventDefault(); displayNumbers(input); }}
          className="form-inline"
        >
          <h5>
            Input Number:&nbsp;
            <input
              disabled={!btnStatus}
              ref={inputRef}
              name="numbers"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
            />
            {validator.message("numbers", input, "required|numeric|max:4")}
            <button
              onClick={() => { validator.showMessages(); }}
              className="btn btn-sm btn-outline-primary"
              type="submit"
            >
              Submit
            </button>
          </h5>
        </form>
      </div>
      <div className="card-body">
        <h5>
          Sensor Reading:
          <button
            className={`btn btn-sm btn-outline-danger ${data}`}
            style={{ borderRadius: '45%' }}
          >
            ----
          </button>
        </h5>
      </div>
    </div>
  );
};

export default Segment;
