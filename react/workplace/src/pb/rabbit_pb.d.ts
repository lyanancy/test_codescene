// package: proto
// file: rabbit.proto

import * as jspb from "google-protobuf";

export class RabbitMQ_Message extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): void;
  addUserIds(value: number, index?: number): number;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RabbitMQ_Message.AsObject;
  static toObject(includeInstance: boolean, msg: RabbitMQ_Message): RabbitMQ_Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RabbitMQ_Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RabbitMQ_Message;
  static deserializeBinaryFromReader(message: RabbitMQ_Message, reader: jspb.BinaryReader): RabbitMQ_Message;
}

export namespace RabbitMQ_Message {
  export type AsObject = {
    userIdsList: Array<number>,
    message: string,
  }
}

