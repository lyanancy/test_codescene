// package: proto
// file: request.proto

import * as jspb from "google-protobuf";

export class Request_Tmp_Auth extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_Tmp_Auth.AsObject;
  static toObject(includeInstance: boolean, msg: Request_Tmp_Auth): Request_Tmp_Auth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_Tmp_Auth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_Tmp_Auth;
  static deserializeBinaryFromReader(message: Request_Tmp_Auth, reader: jspb.BinaryReader): Request_Tmp_Auth;
}

export namespace Request_Tmp_Auth {
  export type AsObject = {
    userId: number,
    accessToken: string,
  }
}

export class Request_Tmp_Init extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_Tmp_Init.AsObject;
  static toObject(includeInstance: boolean, msg: Request_Tmp_Init): Request_Tmp_Init.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_Tmp_Init, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_Tmp_Init;
  static deserializeBinaryFromReader(message: Request_Tmp_Init, reader: jspb.BinaryReader): Request_Tmp_Init;
}

export namespace Request_Tmp_Init {
  export type AsObject = {
  }
}

export class Request_Tmp_Tmp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_Tmp_Tmp.AsObject;
  static toObject(includeInstance: boolean, msg: Request_Tmp_Tmp): Request_Tmp_Tmp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_Tmp_Tmp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_Tmp_Tmp;
  static deserializeBinaryFromReader(message: Request_Tmp_Tmp, reader: jspb.BinaryReader): Request_Tmp_Tmp;
}

export namespace Request_Tmp_Tmp {
  export type AsObject = {
  }
}

