import { Injectable } from '@nestjs/common';
import MqttHandler from '../mqtt/mqtt';

@Injectable()
export class UltraService {

    private mqtt: any;

    constructor() {
      this.mqtt =  MqttHandler;
     
    }
  
    turnOnOff(message: boolean): void {
        console.log("Running Service")
      const operation: string = message ? 'True' : 'False';
      this.mqtt.distanceOnOff(operation);
    }
}
