"use client";
import GameScreen from "@/components/game/GameScreen";
import ModeInfo from "@/components/game/ModeInfo";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [selectedMode, setSelectedMode] = useState("Hiragana Romanizado");

  const startGame = () => {
    setGameIsStarted(true);
  };
  return (
    <main className="w-full m-auto ">
      {gameIsStarted ? (
        <GameScreen
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      ) : (
        <div className="flex-col flex justify-center items-center lg:w-8/12 lg:m-auto h-screen">
          <ModeInfo />
          <div className="">
            <RadioGroup
              label="Selecione o modo desejado:"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
            >
              <Radio value="Hiragana Romanizado">Hiragana - Romanizado</Radio>
              {/* <Radio value="Romanizado Hiragana">Romanizado - Hiragana</Radio> */}
              <Radio value="Katakana Romanizado">Katakana - Romanizado</Radio>
              {/* <Radio value="Romanizado Katakana">Romanizado - Katakana</Radio> */}
            </RadioGroup>
          </div>

          <Button
            color="primary"
            onClick={() => {
              startGame();
            }}
            className="btn-blue"
          >
            Iniciar
          </Button>
        </div>
      )}
    </main>
  );
};

export default Page;
