const EndGame = ({ newGame, player, draw, PLAYER_X, PLAYER_O }) => {
  return (
    <div className="end-screen">
      {!draw && (
        <span className="results">
          Player {player ? PLAYER_O : PLAYER_X} Wins!
        </span>
      )}
      {draw && <span className="results">Draw</span>}
      <button className="button" onClick={newGame}>
        New Game
      </button>
    </div>
  );
};
export default EndGame;