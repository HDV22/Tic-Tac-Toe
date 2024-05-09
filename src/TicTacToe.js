import { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";
const INITIAL = "";
const PLAYER_X = "X";
const PLAYER_O = "O";
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const TicTacToe = () => 
  {const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const newGame = () => 
    {setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);};
  
  const handleClick = (id) => 
    {setGrid(
      grid.map((item, index) => 
        {if (index === id) 
          {if (player) 
            {return PLAYER_X;}
           else 
            {return PLAYER_O;}
          } 
        else 
          {return item;}
      }) );
     
    setPlayer(! player);};
  const isGameOver = () => 
    {if (!gameFinished) 
      {for (let i = 0; i < 8; i++) 
        {if (
          grid[winCombo[i][0]] === PLAYER_X &&
          grid[winCombo[i][1]] === PLAYER_X &&
          grid[winCombo[i][2]] === PLAYER_X)
        {setGameFinished(true);
          return;}
        }

      for (let i = 0; i < 8; i++) 
        {if 
          (grid[winCombo[i][0]] === PLAYER_O &&
          grid[winCombo[i][1]] === PLAYER_O &&
          grid[winCombo[i][2]] === PLAYER_O) 
        {setGameFinished(true);
          return;}
        }

      if (!grid.includes(INITIAL)) 
        {setDraw(true);
        setGameFinished(true);}
      }
     };

  isGameOver();
  return (
    <div>
      <div className="player-turn">
        Turn player: {player ? PLAYER_X : PLAYER_O}
      </div>
      {gameFinished && (
        <EndGame
          newGame={newGame}
          player={player}
          draw={draw}
          PLAYER_X={PLAYER_X}
          PLAYER_O={PLAYER_O}/>
        )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
};
export default TicTacToe;