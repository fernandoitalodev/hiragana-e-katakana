"use client";
import React, { useEffect, useState } from "react";

const ModeInfo = () => {
  return (
    <div className="min-h-64 py-2 px-2 flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl  font-semibold">
        Escolha o modo desejado e clique em{" "}
        <span className="text-blue-400 font-semibold">Iniciar!!</span>
      </h3>
      <div className="mt-4 flex-col flex items-center">
        <h2 className="font-semibold">Exemplo de escolha: </h2>
        <h3 className="">
          Se você escolher a opção
          <span className="text-blue-400 font-semibold">
            {" "}
            Hiragana-romanizado
          </span>{" "}
          as palavras irão aparecer em{" "}
          <span className="text-green-400 font-semibold">Hiragana</span> e você
          deverá inserir a resposta em
          <span className="text-orange-400 font-semibold">
            {" "}
            sílabas romanizadas
          </span>
          .
        </h3>

        <div className="text-2xl flex  justify-center items-center m-2 gap-6">
          <div className="">
            <h3 className="text-blue-400 font-semibold">Hiragana</h3>
            <h3 className="font-semibold">ねこ</h3>
          </div>
          <div className="">
            <h3 className="text-orange-400 font-semibold">Romanizado</h3>
            <h3 className="font-semibold">Ne-ko</h3>
          </div>
        </div>
        <h3 className="mt-2 text-lg">
          Quando a resposta for enviada o significado da palavra também
          aparecerá em português:
        </h3>
        <div className="w-64 text-2xl m-2 border-2 rounded-lg border-slate-400 py-2">
          <h3 className="">
            <span className="text-blue-400 font-semibold">ねこ </span>
            significa{" "}
            <span className="font-semibold text-orange-400">Gato</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ModeInfo;
