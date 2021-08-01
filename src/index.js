import * as Tone from "tone";
import * as osc from "osc";

var oscPort = new osc.WebSocketPort({
  url: "ws://localhost:8081", // URL to your Web Socket server.
  metadata: true
});