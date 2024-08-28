"use client"

import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

interface IGamePieceMoveProps {
}

const GamePieceMove: NextPage<IGamePieceMoveProps> = () => {
  const searchParams = useSearchParams();
  const cell = searchParams.get("cell");
  const result = Number(cell);

  return (
    <div>
      GamePieceMove
    </div>
  );
};
export default GamePieceMove;