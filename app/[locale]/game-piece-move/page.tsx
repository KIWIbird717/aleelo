"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Map } from "@/entities/Map";
import { useActiveCell } from "@/shared/lib/hooks/useActiveCell";

interface IGamePieceMoveProps {
}

const GamePieceMove: NextPage<IGamePieceMoveProps> = () => {
  const { activeCell } = useActiveCell();

  return (
    <View backgroundEffect="gradient">
      <div style={{ paddingBottom: 200 }}>
        <Map activeCell={activeCell} />
      </div>
    </View>
  );
};
export default GamePieceMove;