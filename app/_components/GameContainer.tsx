"use client";
import { useState } from "react";
import GameField from "./GameField";
import WordPool from "./WordPool";

export default function GameContainer() {
  const [fieldSize, setFieldSize] = useState({ width: 0, height: 0 });

  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-top bg-slate-400 flex-wrap ">
      <GameField updateFieldSize={setFieldSize} />
      <WordPool fieldSize={fieldSize} />
    </div>
  );
}
