"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Quiz({ questions, videoId }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (showResult) {
      const score = calculateScore();
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      const testId = videoId;

      if (!email || !password || !testId) {
        console.error("Email, password, or test ID not found in local storage");
        return;
      }

      const credentials = `${email}:${password}`;
      const headers = {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      };

      const body = JSON.stringify({ email, testId, score });
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST}/test/add-record`, body, {
          headers,
        })
        .then((response) => {
          //@ts-ignore
          if (!response.ok) {
            throw new Error("Failed to add quiz record");
          }
        })
        .catch((error) => {
          console.error("Error adding quiz record:", error);
        });
    }
  }, [showResult, videoId]);

  const handleAnswer = (answer: any) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  const showResults = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    window.location.reload();
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  const allQuestionsAnswered = answers.every((answer) => answer !== null);
  const currentAnswered = answers[currentQuestion] !== null;

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="mx-auto mb-12 mt-8 w-full rounded-lg border border-gray-300 bg-gray-100 p-0 text-center md:w-[50%] md:p-12 xl:w-[50%] xl:p-12">
        <h1 className="mb-4 text-2xl font-bold">Результат</h1>
        <p className="mb-4">
          Ваш результат: {score} из {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Начать снова
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-12 mt-8 w-[100%] rounded-lg bg-gray-100 p-4 md:w-[50%] xl:w-[50%]">
      <div className="relative flex justify-center pb-8 pt-8">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-xl font-semibold">
        Вопрос {currentQuestion + 1} из {questions.length}
      </h2>
      <h1 className="mb-4 text-2xl font-bold">
        {questions[currentQuestion].question}
      </h1>
      {questions[currentQuestion].options.map((option: any, index: any) => (
        <label key={index} className="mb-2 block cursor-pointer">
          <input
            type="radio"
            name={`question-${currentQuestion}`}
            value={option}
            checked={answers[currentQuestion] === option}
            onChange={() => handleAnswer(option)}
            className="mr-2 hidden cursor-pointer"
          />
          <div
            className={`flex h-10 w-full items-center justify-center rounded-lg border  border-gray-300 px-4 py-2 text-black transition duration-300 ease-in-out hover:bg-gray-300 ${answers[currentQuestion] === option ? "bg-gray-300" : ""}`}
          >
            {option}
          </div>
        </label>
      ))}
      <div className="mt-4">
        {currentQuestion !== 0 && (
          <button
            onClick={prevQuestion}
            className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Предыдущее
          </button>
        )}
        {currentQuestion !== questions.length - 1 ? (
          <button
            onClick={nextQuestion}
            disabled={
              currentQuestion === questions.length - 1 || !currentAnswered
            }
            className={`bg-blue-500 ${!currentAnswered && "cursor-not-allowed opacity-50"} rounded px-4 py-2 font-bold text-white hover:bg-blue-700`}
          >
            Следующее
          </button>
        ) : (
          <button
            onClick={showResults}
            disabled={!allQuestionsAnswered}
            className={`${allQuestionsAnswered ? "bg-green-500 hover:bg-green-700" : "cursor-not-allowed bg-gray-300"} rounded px-4 py-2 font-bold text-white`}
          >
            Посмотреть результаты
          </button>
        )}
      </div>
    </div>
  );
}
