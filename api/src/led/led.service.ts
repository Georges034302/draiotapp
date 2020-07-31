import { Injectable } from '@nestjs/common';
import MqttHandler from '../mqtt/mqtt';

@Injectable()
export class LedService {
  private mqtt: any;

  constructor() {
    this.mqtt =  MqttHandler
  
  }

  operateRedLed(color: string, message: boolean): void {
    const operation: string = message ? 'True' : 'False';
    this.mqtt.publishLED(color, operation);
  }
}
