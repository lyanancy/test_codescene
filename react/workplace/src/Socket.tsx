import { Request, GetJsonRequest } from "./Request";
import {
  Request_Tmp_Auth,
  Request_Tmp_Init,
  Request_Tmp_Tmp,
} from "./pb/request_pb";
require('dotenv').config();

var protocol: string = "ws";
var host: string | undefined = process.env.REACT_APP_WEBSOCKET_HOST;
var portStr: string | undefined = process.env.REACT_APP_WEBSOCKET_PORT;

if (host === undefined || portStr === undefined) {
  throw new Error("env undefined");
}

// Define WSClient instance
class WrapperWebSocket {
  ENDPOINT: string = protocol + "://" + host + ":" + portStr;
  URI: string = this.ENDPOINT + "/" + protocol;

  // Default reconnect interval
  reconnectInterval: number = 5000;
  // Define whether it has ever reconnected
  reconnected: boolean = false;
  // Log messages
  debug: boolean = true;
  userId: number;

  instance: WebSocket;
  onMessageHandler: (ev: MessageEvent) => any = function (ev: MessageEvent) {};

  // Open the URL
  constructor() {
    // Create underlying websocket instance
    this.instance = new WebSocket(this.URI);
    this.setEvent();

    this.userId = Math.floor(Math.random() * 10000);
  }

  open() {
    if (this.instance) {
      try {
        // reconnect
        this.instance.close(3000, "reconnect");
      } catch (e) {
        // console.log(e);
      }
    }

    // Create underlying websocket instance
    this.instance = new WebSocket(this.URI);
    this.setEvent();

    this.reconnected = false;
  }

  setEvent() {
    // Setup the event handler for onopen
    // this.instance.onopen = this.onOpen;
    var that = this;
    this.instance.onopen = function (ev: Event) {
      that.onOpen(ev);
    };

    // Setup the event handler for onerror
    this.instance.onerror = function (ev: Event) {
      that.onError(ev);
    };

    // Setup the event handler for onerror
    this.instance.onclose = function (ev: CloseEvent) {
      that.onClose(ev);
    };

    // Setup the event handler for onmessage
    this.instance.onmessage = function (ev: MessageEvent) {
      that.onMessageHandler(ev);
    };
  }

  setOnMessage(handler: (ev: MessageEvent) => any) {
    this.onMessageHandler = handler;
  }

  onOpen(ev: Event) {
    console.log("on open");

    var tmpAuth: Request_Tmp_Auth = new Request_Tmp_Auth();
    tmpAuth.setUserId(this.userId);
    tmpAuth.setAccessToken("tamachan");

    this.send(GetJsonRequest(tmpAuth, "Request_Tmp_Auth"));

    var that = this;
    setTimeout(function () {
      var tmpInit: Request_Tmp_Init = new Request_Tmp_Init();

      that.send(GetJsonRequest(tmpInit, "Request_Tmp_Init"));
    }, 2000);
  }

  onClose(ev: CloseEvent): any {
    console.log("test: close");
    console.log(ev.code);
    switch (ev.code) {
      // Normal closure
      case 1000:
        console.log("[WS]: Normal Closed");
        break;
      case 3000:
        console.log("[WS]: Reopen Closed");
        break;
      default:
        this.reconnect();
        break;
    }
  }

  onError(ev: Event): any {
    console.log("[WS]: Errored", ev);
    this.reconnect();
  }

  // Setup send function
  sendRaw(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    console.log("test: send");

    try {
      this.instance.send(data);
    } catch (e) {
      this.reconnect();
    }
  }

  // Send the content
  send(content: string) {
    this.sendRaw(content);
  }

  // Define the reconnection function
  reconnect() {
    console.log("test: reconnect");

    if (this.reconnected) {
      return;
    }

    // Log reconnection
    if (this.debug) {
      console.log(
        `[WS]: Reconnecting in ${this.reconnectInterval / 1000} seconds.`
      );
    }

    this.reconnected = true;
    var that: WrapperWebSocket = this;
    // Set reconnect timeout
    setTimeout(function () {
      // Log reconnecting
      if (that.debug) {
        console.log("[WS]: Reconnecting...");
      }

      that.open();
    }, this.reconnectInterval);
  }
}

export default WrapperWebSocket;
