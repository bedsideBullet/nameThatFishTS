import { Component } from "react";
import "./styles/score-board.css";

type GameProps = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};

export class ClassScoreBoard extends Component<GameProps> {
  render() {
    const { incorrectCount, correctCount, answersLeft } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.slice(correctCount + incorrectCount).map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
