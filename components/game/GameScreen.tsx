"use client";
import React, { useEffect, useReducer, useState } from "react";
import { GiConfirmed } from "react-icons/gi";

export type GameType = {
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
};

export interface wordType {
  isRight: boolean;
  isWrong: boolean;
  selectedSyllables: string[];
  word: string[];
  correctAnswer: string[];
  wordTranslation: string;
  answedQuestions: number[];
  answerOptions: string[];
}

import importedWords from "../../app/api/temporaryQuestions.json";
import Settings from "./Settings";
import SeeCorrectAnswer from "../modals/SeeCorrectAnswer";

const words = importedWords;

type Actions =
  | { type: "add_syllable"; payload: string }
  | { type: "del_syllable"; payload: string[] }
  | { type: "isRigth"; payload: string }
  | { type: "restateIsWrong" }
  | { type: "nextQuestion"; payload: object };

function reducerGameConfig(state: wordType, action: Actions): wordType {
  switch (action.type) {
    case "add_syllable":
      return {
        ...state,
        selectedSyllables: [...state.selectedSyllables, action.payload],
      };

      break;
    case "del_syllable":
      return {
        ...state,
        selectedSyllables: action.payload,
        isWrong: false,
      };

      break;

    case "isRigth":
      if (action.payload === "no") {
        return { ...state, isWrong: true };
      } else {
        return {
          ...state,
          isRight: true,
        };
      }

    case "nextQuestion":
      return {
        ...state,
        ...action.payload,
        selectedSyllables: [],
        isRight: false,
      };

    case "restateIsWrong":
      return { ...state, isWrong: false };

    default:
      return state;
  }
}

type modesType = {
  question: string;
  answer: string;
};

const GameScreen = ({ selectedMode, setSelectedMode }: GameType) => {
  const initialAnswerState: wordType = {
    isRight: false,
    isWrong: false,
    selectedSyllables: [],
    word: ["ね", "こ"],
    correctAnswer: ["ne", "ko"],
    wordTranslation: "Gato",
    answedQuestions: [],
    answerOptions: ["ke", "ka", "ne", "ko", "ma", "me"],
  };
  const [answerState, dispatch] = useReducer(
    reducerGameConfig,
    initialAnswerState
  );
  const selectSyllabe = (syllable: string) => {
    if (
      answerState.isRight ||
      answerState.selectedSyllables.length === answerState.word.length
    ) {
      return;
    }

    dispatch({ type: "add_syllable", payload: syllable });
    dispatch({ type: "restateIsWrong" });
  };
  const removeSelectedSyllable = (index: number) => {
    if (answerState.isRight) {
      return;
    }
    let arr = [...answerState.selectedSyllables];
    arr.splice(index, 1);
    dispatch({ type: "del_syllable", payload: arr });
  };

  const getNextWord = () => {
    let id;
    let mode = [];
    console.log(selectedMode.split(" "));
    if (selectedMode.split(" ")[0] == "Hiragana") {
      mode = words.hiragana;
    } else {
      mode = words.katakana;
    }
    do {
      id = Math.floor(Math.random() * mode.length);
    } while (
      answerState.answedQuestions.includes(id) &&
      mode[id] !== undefined
    );

    const question = mode[id];

    const getAnswerOptions = (correctAnswer: string[]) => {
      let array: string[] = [];

      for (let i = 0; i + correctAnswer.length < 6; i++) {
        let symbols = words.characters.romanization;
        let id;

        do {
          id = Math.floor(Math.random() * symbols.length);
        } while (correctAnswer.includes(symbols[id]));
        array.push(symbols[id]);
      }
      array = [...correctAnswer, ...array];

      for (let x = array.length - 1; x > 0; x--) {
        id = Math.floor(Math.random() * (x + 1));

        const item = array[x];
        array[x] = array[id];
        array[id] = item;
      }

      return array;
    };
    const options = getAnswerOptions(question.romanized);
    const questionObj = {
      word: question.word,
      correctAnswer: question.romanized,
      wordTranslation: question.portuguese[0],
      idWord: id,
      answerOptions: options,
    };

    dispatch({ type: "nextQuestion", payload: questionObj });
  };

  const confirmAnswer = () => {
    let arr1 = answerState.selectedSyllables;
    let arr2 = answerState.correctAnswer;

    if (arr1.length < 1) {
      dispatch({ type: "isRigth", payload: "no" });

      return;
    }

    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] === undefined && arr2[i]) {
        dispatch({ type: "isRigth", payload: "no" });

        return;
      }
      if (arr1[i] !== arr2[i]) {
        dispatch({ type: "isRigth", payload: "no" });

        //restartStates;
        return;
      }
    }
    dispatch({ type: "isRigth", payload: "yes" });
  };
  useEffect(() => {
    getNextWord();
  }, [selectedMode]);

  useEffect(() => {
    getNextWord();
  }, []);
  return (
    <div className="w-screen lg:w-8/12  m-auto flex flex-col items-center h-[500px] lg:h-[500px] justify-between">
      <main className=" flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-full flex-col">
          <div className=" border w-62 m-4 border-slate-500 light:bg-slate-50 dark:bg-white dark:text-slate-900 flex items-center justify-center py-2 px-4 rounded-lg text-6xl">
            <h1 className="">{answerState.word}</h1>
          </div>
          <section className="flex justify-between items-center">
            <div className="w-16">
              <Settings
                selectedMode={selectedMode}
                setSelectedMode={setSelectedMode}
              />
            </div>

            <button
              onClick={() => getNextWord()}
              className="btn-blue text-base"
            >
              Próxima
            </button>
          </section>
        </div>

        <div className="flex items-end justify-center w-9/12 lg:w-3/12 gap-2 h-12 m-2">
          <div className="flex gap-1 items-center min-w-48 w-11/12  border-b-2 border-slate-800 p-1">
            {answerState.selectedSyllables.length >= 1 &&
              answerState.selectedSyllables.map((el, i) => {
                return (
                  <h3
                    onClick={() => removeSelectedSyllable(i)}
                    className={`syllable-option px-4 py-2 font-semibold ${
                      answerState.isRight
                        ? "text-white bg-green-500 border-none"
                        : ""
                    }  ${
                      answerState.isWrong
                        ? "bg-red-500 text-white border-red-400"
                        : ""
                    }`}
                    key={i}
                  >
                    {el}
                  </h3>
                );
              })}
          </div>
          <button
            onClick={() => confirmAnswer()}
            className="btn-blue m-0 text-2xl"
          >
            <GiConfirmed />
          </button>
        </div>

        <div className="h-32 lg:h-20">
          {answerState.isWrong && (
            <div className="flex flex-col items-center justify-center gap-8">
              <h4 className="text-sm text-red-400">
                Resposta Errada,Tente novamente!!
              </h4>
              <SeeCorrectAnswer
                word={answerState.word}
                wordTranslation={answerState.wordTranslation}
              />
            </div>
          )}

          {answerState.isRight && (
            <div className="text-center text-xl p-2">
              <h1 className="text-2xl text-green-500 font-medium">
                Resposta Correta!!
              </h1>
              <div className="dark:text-white dark:bg-green-500 dark:border-none dark:shadow-none border shadow-sm shadow-green-100 border-green-100 bg-green-100 dark:rounded-lg p-4">
                <h1 className="">
                  <span className="text-2xl text-blue-400 font-bold">
                    {answerState.word}
                  </span>{" "}
                  significa{" "}
                  <span className="text-blue-500 font-bold text-2xl ">
                    {answerState.wordTranslation}
                  </span>{" "}
                  em português!!
                </h1>
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="gap-2  p-4 grid grid-cols-3 w-full text-3xl font-medium items-center justify-center">
        {answerState.answerOptions.map((el, index) => {
          return (
            <h3
              onClick={() => selectSyllabe(el)}
              className="syllable-option hover:scale-105 dark:hover:bg-white dark:hover:text-slate-900 light:hover:bg-slate-300"
              key={`option-${index}`}
            >
              {el}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default GameScreen;
