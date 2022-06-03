// package: proto
// file: response.proto

import * as jspb from "google-protobuf";
import * as object_pb from "./object_pb";

export class Response_Field_Information extends jspb.Message {
  clearFieldDecksList(): void;
  getFieldDecksList(): Array<object_pb.FieldDeck>;
  setFieldDecksList(value: Array<object_pb.FieldDeck>): void;
  addFieldDecks(value?: object_pb.FieldDeck, index?: number): object_pb.FieldDeck;

  clearFieldBastionsList(): void;
  getFieldBastionsList(): Array<object_pb.FieldBastion>;
  setFieldBastionsList(value: Array<object_pb.FieldBastion>): void;
  addFieldBastions(value?: object_pb.FieldBastion, index?: number): object_pb.FieldBastion;

  getFrame(): number;
  setFrame(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_Field_Information.AsObject;
  static toObject(includeInstance: boolean, msg: Response_Field_Information): Response_Field_Information.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_Field_Information, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_Field_Information;
  static deserializeBinaryFromReader(message: Response_Field_Information, reader: jspb.BinaryReader): Response_Field_Information;
}

export namespace Response_Field_Information {
  export type AsObject = {
    fieldDecksList: Array<object_pb.FieldDeck.AsObject>,
    fieldBastionsList: Array<object_pb.FieldBastion.AsObject>,
    frame: number,
  }
}

export class Response_Field_Move_Deck extends jspb.Message {
  clearFieldDecksList(): void;
  getFieldDecksList(): Array<object_pb.FieldDeck>;
  setFieldDecksList(value: Array<object_pb.FieldDeck>): void;
  addFieldDecks(value?: object_pb.FieldDeck, index?: number): object_pb.FieldDeck;

  getFrame(): number;
  setFrame(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_Field_Move_Deck.AsObject;
  static toObject(includeInstance: boolean, msg: Response_Field_Move_Deck): Response_Field_Move_Deck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_Field_Move_Deck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_Field_Move_Deck;
  static deserializeBinaryFromReader(message: Response_Field_Move_Deck, reader: jspb.BinaryReader): Response_Field_Move_Deck;
}

export namespace Response_Field_Move_Deck {
  export type AsObject = {
    fieldDecksList: Array<object_pb.FieldDeck.AsObject>,
    frame: number,
  }
}

export class Response_Set_Field_Move_Deck extends jspb.Message {
  clearFieldDeckTosList(): void;
  getFieldDeckTosList(): Array<object_pb.FieldDeckTo>;
  setFieldDeckTosList(value: Array<object_pb.FieldDeckTo>): void;
  addFieldDeckTos(value?: object_pb.FieldDeckTo, index?: number): object_pb.FieldDeckTo;

  getFrame(): number;
  setFrame(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_Set_Field_Move_Deck.AsObject;
  static toObject(includeInstance: boolean, msg: Response_Set_Field_Move_Deck): Response_Set_Field_Move_Deck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_Set_Field_Move_Deck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_Set_Field_Move_Deck;
  static deserializeBinaryFromReader(message: Response_Set_Field_Move_Deck, reader: jspb.BinaryReader): Response_Set_Field_Move_Deck;
}

export namespace Response_Set_Field_Move_Deck {
  export type AsObject = {
    fieldDeckTosList: Array<object_pb.FieldDeckTo.AsObject>,
    frame: number,
  }
}

export class Response_Frame extends jspb.Message {
  getFrame(): number;
  setFrame(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_Frame.AsObject;
  static toObject(includeInstance: boolean, msg: Response_Frame): Response_Frame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_Frame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_Frame;
  static deserializeBinaryFromReader(message: Response_Frame, reader: jspb.BinaryReader): Response_Frame;
}

export namespace Response_Frame {
  export type AsObject = {
    frame: number,
    timestamp: number,
  }
}

export class Response_Field_Atk_Decks extends jspb.Message {
  clearFieldAtkDecksList(): void;
  getFieldAtkDecksList(): Array<object_pb.FieldAtkDeck>;
  setFieldAtkDecksList(value: Array<object_pb.FieldAtkDeck>): void;
  addFieldAtkDecks(value?: object_pb.FieldAtkDeck, index?: number): object_pb.FieldAtkDeck;

  getFrame(): number;
  setFrame(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_Field_Atk_Decks.AsObject;
  static toObject(includeInstance: boolean, msg: Response_Field_Atk_Decks): Response_Field_Atk_Decks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_Field_Atk_Decks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_Field_Atk_Decks;
  static deserializeBinaryFromReader(message: Response_Field_Atk_Decks, reader: jspb.BinaryReader): Response_Field_Atk_Decks;
}

export namespace Response_Field_Atk_Decks {
  export type AsObject = {
    fieldAtkDecksList: Array<object_pb.FieldAtkDeck.AsObject>,
    frame: number,
  }
}

