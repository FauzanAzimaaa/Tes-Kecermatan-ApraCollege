import { useState, useEffect } from "react";
import QuizSection from "../components/quizpage/QuizSection";
import listQuestionAngka from "../data/listQuestionAngka.json"
import dataQuestion from "../data/dataQuestionAngka.json"

function QuizPageAngka(){
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
    <>
        <section className="flex flex-col items-center justify-center h-screen bg-transparent text-center">
        {timeLeft > 0 && (
            <div className={`text-8xl font-bold text-white transition-transform duration-500 ease-out scale-125 opacity-100`}>
            <h1 className="text-4xl">Persiapan</h1>
            {timeLeft}
            </div>
        )}

        {timeLeft === 0 && (
            <section className="flex flex-col items-center justify-center h-full w-full py-8 px-28">
                <QuizSection questionData={dataQuestion} questionType={"Kecermatan Angka"} listQuestion={listQuestionAngka}/>
            </section>
        )}
        </section>
    </>
    );
}

export default QuizPageAngka;