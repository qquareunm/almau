import React, { useState, useEffect } from "react";

import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Video {
  id: string;
  questions: Question[];
}

interface QuizData {
  videos: Video[];
}

export default function Test() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if (!email || !password) {
        console.error("Email or password not found in local storage");
        return;
      }

      const credentials = `${email}:${password}`;
      const headers = new Headers();
      headers.append("Authorization", `Basic ${credentials}`);

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/test/all`, {
        headers,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch quiz data");
      }

      const data: QuizData = await response.json();
      setQuizData(data);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  return (
    <div className="container">
      <div className="text-whitew-[100%] my-6 w-[100%] rounded bg-blue-500 px-5 py-10 font-bold text-white md:w-[48%] xl:w-[48%]">
        <Link href={"/conspect"}>Читать конспект</Link>
      </div>
      <div className="mb-12 mt-4 flex flex-wrap">
        {quizData &&
          quizData.videos.map((video, index) => (
            <Link
              key={index}
              href={`my-cabinet/${video.id}`}
              className="mb-2 mr-2 grid w-[100%] grid-cols-2 gap-4 bg-blue-500 px-5 py-10 text-white hover:underline md:w-[48%] xl:w-[48%]"
            >
              Урок {index + 1}
            </Link>
          ))}
      </div>
    </div>
  );
}
