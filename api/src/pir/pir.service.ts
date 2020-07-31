import { Injectable } from '@nestjs/common';
import MqttHandler from '../mqtt/mqtt';

@Injectable()
export class PirService {
    private mqtt: any;

    constructor() {
      this.mqtt =  MqttHandler;
    //   this.mqtt.connect();
    }
  
    turnOnOff(message: boolean): void {
      const operation: string = message ? 'True' : 'False';
      this.mqtt.motionOnOff(operation)
    }
}
