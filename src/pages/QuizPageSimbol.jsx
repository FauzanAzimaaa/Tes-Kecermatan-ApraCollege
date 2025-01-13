import { useState } from "react";
import QuizSection from "../components/quizpage/QuizSection";
import Countdown from "../components/quizpage/Countdown";
import listQuestionSimbol from "../data/listQuestionSimbol.json";
import dataQuestionSimbol from "../data/dataQuestionSimbol.json";

function QuizPageSimbol() {
    const [isTimeUp, setIsTimeUp] = useState(false);

    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen bg-transparent text-center">
                {!isTimeUp && (
                    <Countdown
                        initialTime={3}
                        onTimeEnd={() => setIsTimeUp(true)}
                    />
                )}

                {isTimeUp && (
                    <section className="flex flex-col items-center mt-8 md:justify-center h-full w-full py-8 px-8 md:px-12 lg:px-28">
                        <QuizSection
                            questionData={dataQuestionSimbol}
                            questionType={"Kecermatan Simbol"}
                            listQuestion={listQuestionSimbol}
                        />
                    </section>
                )}
            </section>
        </>
    );
}

export default QuizPageSimbol;
