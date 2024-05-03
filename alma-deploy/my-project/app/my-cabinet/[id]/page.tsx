"use client"
import React, { useState, useEffect } from "react";
import Quiz from "../../../components/test/test";
import Link from "next/link";


interface QuizData {
    id: string;
    video: string;
    lesson: string;
    questions: any[];
}

const Lesson = ({ params }: { params: { id: string } }) => {
    const id = params.id

    const [quizData, setQuizData] = useState<QuizData | null>(null);

    const [scoreData, setScore] = useState<any>();
    const [resultData, setResultData] = useState<any>();


    useEffect(() => {
        fetchQuizData();
        handleFetchData();

    }, []);

    useEffect(() => {
        if (quizData && scoreData) {
            handleSetActiveQuiz(quizData.video);
        }
    }, [quizData, scoreData]);

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

            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/test/${id}`, {
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

    const handleFetchData = async () => {
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

            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/users/${email}`, {
                headers,
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setScore(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const calculateHighestScore = () => {
        if (!resultData || resultData.length === 0) return 0;

        return Math.max(...resultData.map((result: any) => result.score));
    };

    const calculateAverageScore = () => {
        if (!resultData || resultData.length === 0) return 0;

        const totalScore = resultData.reduce((accumulator: number, result: any) => {
            return accumulator + result.score;
        }, 0);

        const averageScore = totalScore / resultData.length;
        return Math.round(averageScore * 100) / 100;
    };


    if (!quizData) {
        return null;
    }


    const { video, questions, lesson } = quizData;

    const handleSetActiveQuiz = (video: any) => {
        if (!scoreData || !quizData) return;

        const resultsForVideo = scoreData.testResults.filter(
            (result: any) => result.test_id === video
        );
        setResultData(resultsForVideo);
    };

    return (
        <main className="flex-grow">
            <div className="container mt-4">   <Link className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/my-cabinet"}>Назад </Link></div>


            <div className="bg-slate-50 text-center pb-8 pt-8">

                <p className="text-xl font-bold pb-8 ">{lesson}</p>
                {scoreData && (
                    <h1 className="text-l md:text-2xl  xl:text-2xl font-bold pb-8 mb-2">Пользователь: {scoreData.name} {scoreData.surname}</h1>
                )}
                {resultData && resultData.length > 0 ? (
                    <p className="text-lg">Попыток: {resultData.length}</p>
                ) : (
                    <p className="text-lg">Пройти тест</p>
                )}
                <p className="text-lg">Лучший балл: {calculateHighestScore()}</p>
                <p className="text-lg">Cредний балл: {calculateAverageScore()}</p>
            </div>


            <React.Fragment>

                <Quiz questions={questions} videoId={video} />

            </React.Fragment>

        </main>
    )
}

export default Lesson