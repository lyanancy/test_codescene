import React, { useState, useEffect } from "react";
import Wrapper from "./Socket";
import { Request } from "./Request";
import {
  Response_Field_Move_Deck,
  Response_Field_Information,
  Response_Field_Atk_Decks,
} from "./pb/response_pb";
import base64js from "base64-js";
import { EnumDeckStatus } from "./pb/enum_pb";

const style = {
  border: "1px solid gray",
  backgroundColor: "white",
};

var ws = new Wrapper();

setInterval(function () {
  // ws.send("ws:Tmp.tmp:Good Moning, Server!");
}, 5000);

// for typescript
interface CanvProps {}
interface CanvState {}

interface Coordinates {
  x: number;
  y: number;
}

interface Deck {
  userId: number;
  deckStatus: number;
  coord: Coordinates;
  frame: number;
}

interface Bastion {
  bastionId: number;
  bastionName: string;
  coord: Coordinates;
  frame: number;
}

interface Damage {
  damage: number;
  coord: Coordinates;
  recordDate: number;
}

class Canv extends React.Component<CanvProps, CanvState> {
  canvas: any = React.createRef();
  X: number = 2000;
  Y: number = 2000;

  constructor(props: CanvProps) {
    super(props);
    this.state = {};
    var tmp: Canv = this;
    var decks: Deck[] = [];
    var bastions: Bastion[] = [];
    var damages: Damage[] = [];

    setInterval(function () {
      const ctx = tmp.getContext();
      if (!ctx) {
        return;
      }

      tmp.setState({ drawing: true });

      ctx.clearRect(0, 0, tmp.X + 100, tmp.Y + 100);
      damages.map((damage: Damage, index: number) => {
        var diff: number = Date.now() - damage.recordDate;
        if (diff > 1000) {
          delete damages[index];
          return;
        }

        tmp.fillText(
          damage.damage.toString(),
          damage.coord.x,
          damage.coord.y - diff / 5,
          "green",
          "16px Arial"
        );
      });

      decks.map((deck: Deck, index: number) => {
        var fillStyle =
          deck.deckStatus === EnumDeckStatus.DECK_STATUS_BEGIN_WAR
            ? "red"
            : "blue";
        tmp.fillText(
          deck.userId.toString(),
          deck.coord.x,
          deck.coord.y,
          fillStyle
        );
      });

      bastions.map((bastion: Bastion, index: number) => {
        tmp.fillText(bastion.bastionName, bastion.coord.x, bastion.coord.y);
      });

      tmp.setState({ drawing: false });
    }, 200);

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
        case "Response_Field_Information":
          var rfi: Response_Field_Information =
            Response_Field_Information.deserializeBinary(data64);

          rfi.getFieldDecksList().forEach((f) => {
            var uId: number = f.getUserId();
            var deckStatus: number = f.getDeckStatus();

            var coord = f.getCoordinate();
            if (coord) {
              // var dNo: number = parseInt(matches[2]);
              var x: number = coord.getX();
              var y: number = coord.getY();
              x /= 100;
              y /= 100;

              var xCanv: number = (tmp.X / (6000 + 1)) * (x + 3000);
              var yCanv: number = (tmp.Y / (6000 + 1)) * (y + 3000);

              if (
                decks[uId] !== undefined &&
                decks[uId].frame >= rfi.getFrame()
              ) {
                return;
              }

              decks[uId] = {
                userId: uId,
                deckStatus: deckStatus,
                coord: { x: xCanv, y: yCanv },
                frame: rfi.getFrame(),
              };
            }
          });
          rfi.getFieldBastionsList().forEach((f) => {
            var bId: number = f.getBastionId();
            var bName: string = f.getBastionName();

            var coord = f.getCoordinate();
            if (coord) {
              // var dNo: number = parseInt(matches[2]);
              var x: number = coord.getX();
              var y: number = coord.getY();
              x /= 100;
              y /= 100;

              var xCanv: number = (tmp.X / (6000 + 1)) * (x + 3000);
              var yCanv: number = (tmp.Y / (6000 + 1)) * (y + 3000);

              if (
                bastions[bId] !== undefined &&
                bastions[bId].frame >= rfi.getFrame()
              ) {
                return;
              }

              bastions[bId] = {
                bastionId: bId,
                bastionName: bName,
                coord: { x: xCanv, y: yCanv },
                frame: rfi.getFrame(),
              };
            }
          });
          break;

        case "Response_Field_Move_Deck":
          var rfmd: Response_Field_Move_Deck =
            Response_Field_Move_Deck.deserializeBinary(data64);

          rfmd.getFieldDecksList().forEach((f) => {
            var uId: number = f.getUserId();
            var deckStatus: number = f.getDeckStatus();

            var coord = f.getCoordinate();
            if (coord) {
              // var dNo: number = parseInt(matches[2]);
              var x: number = coord.getX();
              var y: number = coord.getY();
              x /= 100;
              y /= 100;

              var xCanv: number = (tmp.X / (6000 + 1)) * (x + 3000);
              var yCanv: number = (tmp.Y / (6000 + 1)) * (y + 3000);

              if (
                decks[uId] !== undefined &&
                decks[uId].frame >= rfmd.getFrame()
              ) {
                return;
              }

              decks[uId] = {
                userId: uId,
                deckStatus: deckStatus,
                coord: { x: xCanv, y: yCanv },
                frame: rfmd.getFrame(),
              };
            }
          });
          break;

        case "Response_Field_Atk_Decks":
          var rfat: Response_Field_Atk_Decks =
            Response_Field_Atk_Decks.deserializeBinary(data64);
            
          rfat.getFieldAtkDecksList().forEach((f) => {
            var atkDeck = f.getAtkDeck();
            var defDeck = f.getDefDeck();
            var damage = f.getDamage();
            var defeat = f.getDefeat();

            if (
              atkDeck &&
              defDeck &&
              damage !== undefined &&
              defeat !== undefined
            ) {
              if (decks[defDeck.getUserId()] !== undefined) {
                var deck = decks[defDeck.getUserId()];
                damages.push({
                  damage: damage,
                  coord: deck.coord,
                  recordDate: Date.now(),
                });
              }
  
              [atkDeck, defDeck].forEach((f) => {
                var uId: number = f.getUserId();
                var deckStatus: number = f.getDeckStatus();
  
                var coord = f.getCoordinate();
                if (coord) {
                  // var dNo: number = parseInt(matches[2]);
                  var x: number = coord.getX();
                  var y: number = coord.getY();
                  x /= 100;
                  y /= 100;
  
                  var xCanv: number = (tmp.X / (6000 + 1)) * (x + 3000);
                  var yCanv: number = (tmp.Y / (6000 + 1)) * (y + 3000);
  
                  if (
                    decks[uId] !== undefined &&
                    decks[uId].frame >= rfat.getFrame()
                  ) {
                    return;
                  }
  
                  decks[uId] = {
                    userId: uId,
                    deckStatus: deckStatus,
                    coord: { x: xCanv, y: yCanv },
                    frame: rfat.getFrame(),
                  };
                }
              });
            }
          });

          break;

        default:
          break;
      }
    });
  }

  getContext() {
    if (!this.canvas.current) {
      return null;
    }
    return this.canvas.current.getContext("2d");
  }

  fillText(
    text: string,
    x: number,
    y: number,
    fillStyle: string = "",
    font: string = ""
  ) {
    const ctx = this.getContext();

    if (font) {
      ctx.font = font;
    } else {
      ctx.font = "12px Arial";
    }
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
    } else {
      ctx.fillStyle = "black";
    }

    ctx.fillText(text, x, y);
  }

  startDrawing(x: number, y: number) {
    this.setState({ drawing: true });
    const ctx = this.getContext();
    ctx.moveTo(x, y);
  }

  draw(x: number, y: number) {
    const ctx = this.getContext();
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  endDrawing() {
    this.setState({ drawing: false });
  }

  render() {
    return (
      <canvas ref={this.canvas} width="2000px" height="2000px" style={style} />
    );
  }
}

function App() {
  return (
    <p>
      <Canv />
    </p>
  );
}

export default App;
