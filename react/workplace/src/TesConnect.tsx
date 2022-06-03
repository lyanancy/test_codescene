import React, { useState, useEffect } from "react";
import {
  Response_Field_Move_Deck,
  Response_Frame,
  Response_Set_Field_Move_Deck,
} from "./pb/response_pb";
import Wrapper from "./Socket";
import base64js from "base64-js";
import { Request } from "./Request";

var ws = new Wrapper();

function App() {
  // const [response, setResponse] = useState("");
  const [responses, setResponses] = useState<string[]>([]);
  ws.setOnMessage(function (ev: MessageEvent) {
    var res: string = ev.data;
    try {
      var resJson: Request = JSON.parse(res);
    } catch (e) {
      console.log(res);
      return;
    }
    var data64: Uint8Array = base64js.toByteArray(resJson.data);

    switch (resJson.name) {
      case "Response_Frame":
        var rfi: Response_Frame = Response_Frame.deserializeBinary(data64);

        var to: string[] = [];
        to[0] = "FPS:" + rfi.getFrame().toString();
        to[1] = "Timestamp" + rfi.getTimestamp().toString();
        setResponses([...to, ...responses.slice(2, 10)]);
        break;

      case "Response_Set_Field_Move_Deck":
        // var rsfmd: Response_Set_Field_Move_Deck =
        //   Response_Set_Field_Move_Deck.deserializeBinary(data64);

        // var uId = rsfmd.getFieldDeckTo()?.getUserId();
        // var dNo = rsfmd.getFieldDeckTo()?.getDeckNo();
        // var x = rsfmd.getFieldDeckTo()?.getCoordinate()?.getX();
        // var y = rsfmd.getFieldDeckTo()?.getCoordinate()?.getY();

        // if (x !== undefined && y !== undefined) {
        //   x /= 100;
        //   y /= 100;
        //   var msg = "[" + uId + ":" + dNo + "] => [" + x + "," + y + "]";
        //   var to: string[] = [...responses.slice(0, 2), msg];
        //   setResponses([...to, ...responses.slice(2, 9)]);
        // }

        break;

      default:
        break;
    }
  });

  return (
    <div>
      {/* <p>
        It's <time dateTime={response}>{response}</time>
      </p> */}
      <ul>
        <li key={-1}>[List]</li>
        {responses.map((str: string, key: number) => (
          <li key={key}>
            {key}: {str}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
