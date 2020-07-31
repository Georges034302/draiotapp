import { Injectable } from '@nestjs/common';
import MqttHandler from '../mqtt/mqtt';

@Injectable()
export class SegmentDisplayService {
  private mqtt: any;

  constructor() {
    this.mqtt = MqttHandler;
 
  }

  turnOnOff(message: boolean) {
    const operation: string = message ? 'True' : 'False';

    this.mqtt.turnOfOn7Segment(operation);
  }

  displayNumbers(numbers: string) {
    this.mqtt.displayNumber7Segment(numbers);
  }
}
