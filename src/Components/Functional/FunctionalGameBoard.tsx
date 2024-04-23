import "./styles/game-board.css";
import { initialFishes } from "../data/fishes";
import { useState } from "react";
type gameProps = {
  setCorrectCount: (updateFn: (prev: number) => number) => void;
  setIncorrectCount: (updateFn: (prev: number) => number) => void;
  currentFishIndex: number;
};

export function FunctionalGameBoard({
  setCorrectCount,
  setIncorrectCount,
  currentFishIndex,
}: gameProps) {
  const [guess, setGuess] = useState<string>("");
  const nextFishToName = initialFishes[currentFishIndex];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    guess === nextFishToName.name
      ? setCorrectCount((prev) => prev + 1)
      : setIncorrectCount((prev) => prev + 1);
    setGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
