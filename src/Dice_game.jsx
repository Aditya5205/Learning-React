import { useState } from "react";
import ChoiceBox from "./components/dice/ChoiceBox";
import DiceRoll from "./components/dice/DiceRoll";

const Dice_game = () => {
  const [score, setScore] = useState(0);
  const arr = [1, 2, 3, 4, 5, 6];

  const [selectInput, setSelectInput] = useState(0);
  const [compChoice, setCompChoice] = useState(1);

  const rollDice = () => {
    if (selectInput > 0) {
      let ind = Math.floor(Math.random() * arr.length);

      setCompChoice(arr[ind]);
      compare(arr[ind]);
      setSelectInput(0);
    }
  };

  const compare = (val) => {
    if (selectInput === val) {
      setScore((prev) => prev + selectInput);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const reset = () => {
    setScore(0);
    setSelectInput(0);
    setCompChoice(0);
  };

  return (
    <div className="h-screen w-full bg-gray-500 bg-cover bg-no-repeat">
      <div className="flex flex-wrap">
        <div className="ml-7 mt-7 h-fit rounded-lg bg-gray-300 px-7 py-1 text-center text-xl font-normal">
          <div className="text-5xl">{score}</div>
          <br />
          Score
        </div>
        <div className="ml-auto mr-7 mt-7 h-fit rounded-lg bg-gray-300 px-4 pt-4">
          <div className="flex flex-wrap gap-4">
            {arr.map((val, i) => (
              <ChoiceBox
                key={i}
                click={() => setSelectInput(val)}
                isSelected={val === selectInput}
                value={val}
              />
            ))}
          </div>
          <div className="p-2 text-center text-xl">Select a number</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        <DiceRoll click={rollDice} compInput={compChoice} />
      </div>

      <div className="flex flex-wrap items-center justify-center">
        <button
          className="mt-5 rounded-3xl bg-gray-300 p-3 text-xl hover:bg-blue-500 hover:text-white"
          onClick={reset}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Dice_game;
