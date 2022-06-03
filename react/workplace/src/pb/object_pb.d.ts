// package: proto
// file: object.proto

import * as jspb from "google-protobuf";
import * as enum_pb from "./enum_pb";

export class FieldCoordinate extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldCoordinate.AsObject;
  static toObject(includeInstance: boolean, msg: FieldCoordinate): FieldCoordinate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldCoordinate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldCoordinate;
  static deserializeBinaryFromReader(message: FieldCoordinate, reader: jspb.BinaryReader): FieldCoordinate;
}

export namespace FieldCoordinate {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class FieldDeck extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getDeckNo(): number;
  setDeckNo(value: number): void;

  hasCoordinate(): boolean;
  clearCoordinate(): void;
  getCoordinate(): FieldCoordinate | undefined;
  setCoordinate(value?: FieldCoordinate): void;

  getDeckStatus(): enum_pb.EnumDeckStatusMap[keyof enum_pb.EnumDeckStatusMap];
  setDeckStatus(value: enum_pb.EnumDeckStatusMap[keyof enum_pb.EnumDeckStatusMap]): void;

  getHp(): number;
  setHp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDeck.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDeck): FieldDeck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldDeck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDeck;
  static deserializeBinaryFromReader(message: FieldDeck, reader: jspb.BinaryReader): FieldDeck;
}

export namespace FieldDeck {
  export type AsObject = {
    userId: number,
    deckNo: number,
    coordinate?: FieldCoordinate.AsObject,
    deckStatus: enum_pb.EnumDeckStatusMap[keyof enum_pb.EnumDeckStatusMap],
    hp: number,
  }
}

export class FieldDeckTo extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getDeckNo(): number;
  setDeckNo(value: number): void;

  hasCoordinate(): boolean;
  clearCoordinate(): void;
  getCoordinate(): FieldCoordinate | undefined;
  setCoordinate(value?: FieldCoordinate): void;

  getDeckStatus(): enum_pb.EnumDeckStatusMap[keyof enum_pb.EnumDeckStatusMap];
  setDeckStatus(value: enum_pb.EnumDeckStatusMap[keyof enum_pb.EnumDeckStatusMap]): void;

  getHp(): number;
  setHp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDeckTo.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDeckTo): FieldDeckTo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldDeckTo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDeckTo;
  static deserializeBinaryFromReader(message: FieldDeckTo, reader: jspb.BinaryReader): FieldDeckTo;
}

export namespace FieldDeckTo {
  export type AsObject = {
    userId: number,
    deckNo: number,
    coordinate?: FieldCoordinate.AsObject,
    deckStatus: enum_pb.EnumDeckStatusMap[keyof enum_pb.EnumDeckStatusMap],
    hp: number,
  }
}

export class FieldBastion extends jspb.Message {
  getBastionId(): number;
  setBastionId(value: number): void;

  getBastionName(): string;
  setBastionName(value: string): void;

  getAllianceId(): number;
  setAllianceId(value: number): void;

  hasCoordinate(): boolean;
  clearCoordinate(): void;
  getCoordinate(): FieldCoordinate | undefined;
  setCoordinate(value?: FieldCoordinate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldBastion.AsObject;
  static toObject(includeInstance: boolean, msg: FieldBastion): FieldBastion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldBastion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldBastion;
  static deserializeBinaryFromReader(message: FieldBastion, reader: jspb.BinaryReader): FieldBastion;
}

export namespace FieldBastion {
  export type AsObject = {
    bastionId: number,
    bastionName: string,
    allianceId: number,
    coordinate?: FieldCoordinate.AsObject,
  }
}

export class FieldAtkDeck extends jspb.Message {
  hasAtkDeck(): boolean;
  clearAtkDeck(): void;
  getAtkDeck(): FieldDeck | undefined;
  setAtkDeck(value?: FieldDeck): void;

  hasDefDeck(): boolean;
  clearDefDeck(): void;
  getDefDeck(): FieldDeck | undefined;
  setDefDeck(value?: FieldDeck): void;

  getDamage(): number;
  setDamage(value: number): void;

  getDefeat(): boolean;
  setDefeat(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldAtkDeck.AsObject;
  static toObject(includeInstance: boolean, msg: FieldAtkDeck): FieldAtkDeck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldAtkDeck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldAtkDeck;
  static deserializeBinaryFromReader(message: FieldAtkDeck, reader: jspb.BinaryReader): FieldAtkDeck;
}

export namespace FieldAtkDeck {
  export type AsObject = {
    atkDeck?: FieldDeck.AsObject,
    defDeck?: FieldDeck.AsObject,
    damage: number,
    defeat: boolean,
  }
}

