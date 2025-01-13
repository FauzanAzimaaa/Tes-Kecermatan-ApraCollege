import { useState } from "react";
import QuizSection from "../components/quizpage/QuizSection";
import Countdown from "../components/quizpage/Countdown";
import listQuestionHuruf from "../data/listQuestionHuruf.json";
import dataQuestionHuruf from "../data/dataQuestionHuruf.json";

function QuizPageAngka() {
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
                            questionData={dataQuestionHuruf}
                            questionType={"Kecermatan Alfabet"}
                            listQuestion={listQuestionHuruf}
                        />
                    </section>
                )}
            </section>
        </>
    );
}

export default QuizPageAngka;
