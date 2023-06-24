type Player = {
  id: number;
  name: string;
  iconClass: string;
  colorClass: string;
};

type GameState = {
  currentGameMoves: any[];
  history: {
    currentRoundGames: any[];
    allGames: any[];
  };
};
