import * as jspb from "google-protobuf";
import base64js from "base64-js";

export type Request = {
  name: string;
  data: string;
};

export function GetJsonRequest(m: jspb.Message, name: string) {
  var res: Request = {
    name: name,
    data: base64js.fromByteArray(m.serializeBinary()),
  };

  return JSON.stringify(res);
}
