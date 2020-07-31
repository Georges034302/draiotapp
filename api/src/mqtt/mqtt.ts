import * as mqtt from 'mqtt';
import Segment from '../model/segment';
import Distance from '../model/distance';
import PIR from '../model/pir';

// const channel = pusher.subscribe("motion-channel");
// channel.bind("motion-data-event", data => {

import * as Pusher from 'pusher';

let channels_client = new Pusher({
  appId: '873019',
  key: '13d42090d9298d2858ef',
  secret: '0fd1c82be5467bc4736c',
  cluster: 'ap4',
  encrypted: true,
});

class MqttHandler {
  mqttClient: any;
  host: any;
  username: any; // mqtt credentials if these are needed to connect
  password: any;

  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://soldier.cloudmqtt.com:17181';
    this.username = 'wrcfatqb'; // mqtt credentials if these are needed to connect
    this.password = 'UA25D7hSJZ1C';
  }

  handleTopic = (topic, message): void => {
    switch (topic) {
      case 'PIR/startup':
        const pirStatus: boolean = message.toString() === 'True';
        const updateValuePIRData = {
          status: pirStatus,
        };
        PIR.update(
          { username: 'joel1010' },
          updateValuePIRData,
          { upsert: true },
          err => {
            if (err) console.log(err);
          },
        );

      // 7 Segment
      case 'data':
        const numbers: number = parseInt(message.toString());
        channels_client.trigger(
          'segment-channel',
          'segment-data-event',
          numbers,
        );

        if (numbers) {
          const updateValueSegmentData = {
            status: true,
            numbers,
          };
          Segment.update(
            { username: 'joel1010' },
            updateValueSegmentData,
            { upsert: true },
            err => {
              if (err) console.log(err);
            },
          );
        }

        break;

      case 'startup':
        const status: boolean = message.toString() === 'True';
        const updateValueSegment = {
          status,
        };
        Segment.update(
          { username: 'joel1010' },
          updateValueSegment,
          { upsert: true },
          err => {
            if (err) console.log(err);
          },
        );

        break;

      // PIR

      //   detected: {
      //     type: Boolean,
      //     required: true,
      //     default: false,
      // },
      // status: {
      //     type: Boolean,
      //     required: true,
      //     default: true,
      // },
      case 'PIR/data':
        const data: string = message.toString();
        const detectMotion: boolean = data === 'DETECTED' ? true : false;
        channels_client.trigger('motion-channel', 'motion-data-event', data);
        if (detectMotion) {
          PIR.create({
            username: 'joel1010',
            detected: true,
            status: true,
          });
        }

        break;

      case 'ULTRA/data':
        const dataUltra: string = message.toString();
        const numbersData: number = parseFloat(dataUltra);
        let updateValueData = {
          numbers: numbersData,
        };
        Distance.update(
          { username: 'joel1010' },
          updateValueData,
          { upsert: true },
          err => {
            if (err) console.log(err);
          },
        );
        channels_client.trigger('ultra-channel', 'ultra-data-event', dataUltra);
        break;
      case 'ULTRA/startup':
        const statusUltra: string = message.toString();
        let statusBoolean: boolean = false;

        statusBoolean = true ? statusUltra === 'True' : false;
        //   status: {
        //     type: Boolean,
        //     required: true,
        // },
        // numbers: {
        //     type: Number,
        //     required: true,
        // },

        // username: {
        //     type: String,
        //     required: true
        // },
        let updateValue = {
          status: statusBoolean,
        };
        Distance.update(
          { username: 'joel1010' },
          updateValue,
          { upsert: true },
          err => {
            if (err) console.log(err);
          },
        );
        break;
    }
  };

  connect = (): void => {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, {
      username: this.username,
      password: this.password,
    });

    // Mqtt error calback
    this.mqttClient.on('error', err => {
      // console.log(err);
      // this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      // console.log(`mqtt client connected`);
    });

    // // mqtt subscriptions for 7 Segment
    this.mqttClient.subscribe('startup');

    this.mqttClient.subscribe('data');

    // subscriptions for LEDs
    this.mqttClient.subscribe('LED/red');
    this.mqttClient.subscribe('LED/green');
    this.mqttClient.subscribe('LED/blue');
    this.mqttClient.subscribe('LED/yellow');

    // subscriptions for Motion (PIR)
    this.mqttClient.subscribe('PIR/data');
    this.mqttClient.subscribe('PIR/startup');

    // subscriptions for Ultra
    this.mqttClient.subscribe('ULTRA/startup');
    this.mqttClient.subscribe('ULTRA/data');

    // When a message arrives, console.log it
    this.mqttClient.on('message', (topic, message) => {
      this.handleTopic(topic, message);
    });
  };

  // 7 segment display
  turnOfOn7Segment = (message: string): void => {
    this.mqttClient.publish('startup', message);
  };

  displayNumber7Segment = (numbers: any) => {
    const message: string = numbers;
    this.mqttClient.publish('data', message);
  };

  //    motion sensor function handlers
  motionOnOff = (operation: string): void => {
    this.mqttClient.publish('PIR/startup', operation);
  };

  //    motion sensor function handlers
  distanceOnOff = (operation: string): void => {
    console.log('Running MQTT');
    this.mqttClient.publish('ULTRA/startup', operation);
  };

  // LED mqtt function handlers

  publishLED = (color: string, operation: string): void => {
    // this is the channel based on the color of the LED
    const LEDColor = `LED/${color}`;

    this.mqttClient.publish(LEDColor, operation);
  };
}
const controller = new MqttHandler();
controller.connect();
export default controller;
