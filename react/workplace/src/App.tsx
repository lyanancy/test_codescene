import React from 'react';
import ReactDOM from 'react-dom';

// for typescript
interface SquareProps {
  value: string;
  onClick(): void;
}
type SquareList = (string | null)[];
function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares: SquareList) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// for typescript
interface BoardProps {
  onClick(i: number): void;
  squares: SquareList;
}
interface BoardState {
  squares: SquareList;
}
class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i: any) {
    return (
      <Square
        value={this.props.squares[i] ?? ''}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

type History = {
  squares: SquareList;
  winner: string | null;
};
interface GameProps {}
interface GameState {
  history: History[];
  stepNumber: number;
  xIsNext: boolean;
  winner: string | null;
}
class Game extends React.Component<GameProps, GameState> {
  private nextSq = ['X', 'O'];

  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          winner: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      winner: null,
    };
  }

  truncateByStep(): History[] {
    const history = this.state.history;
    return history.slice(0, this.state.stepNumber + 1);
  }

  getLast(): History {
    const history = this.state.history;
    return history[history.length - 1];
  }

  getCurrentWithStep(): History {
    const history = this.state.history;
    return history[this.state.stepNumber];
  }

  getSquare(xIsNext: boolean): string {
    return this.nextSq[xIsNext ? 0 : 1];
  }

  jumpTo(step: number) {
    const stepHistory = this.state.history[step];

    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner: stepHistory.winner,
    });
  }

  handleClick(i: number) {
    if (this.state.winner) {
      return;
    }

    const newHistory = this.truncateByStep();
    const current = newHistory[newHistory.length - 1];
    // 複製して現在とする
    const currentSquares = current.squares.slice();

    if (currentSquares[i]) {
      return;
    }
    currentSquares[i] = this.getSquare(this.state.xIsNext);

    const winner = calculateWinner(currentSquares);

    this.setState({
      history: newHistory.concat([
        {
          squares: currentSquares,
          winner: winner,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      winner: winner,
      stepNumber: newHistory.length,
    });
  }

  render() {
    const current = this.getCurrentWithStep();

    const moves = this.state.history.map((step, move) => {
      const desc = move ? 'Go to #' + (move + 1) : 'Go to #1 Game Start!';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const currentTurn = 'Turn: ' + (this.state.stepNumber + 1);

    let status;
    if (this.state.winner) {
      status = 'Winner: ' + this.state.winner;
    } else {
      status = 'Next player: ' + this.getSquare(this.state.xIsNext);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{currentTurn}</div>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));

export default Game;
