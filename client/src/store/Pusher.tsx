import Pusher from "pusher-js";

class PusherClient {
  pusherClient: any;

  constructor() {
    const pusher = new Pusher("13d42090d9298d2858ef", {
      cluster: "ap4",
      encrypted: true
    });

    this.pusherClient = pusher;
  }
}

export default new PusherClient();
