import { useState } from "react";
import Countdown from "../components/quizpage/Countdown";
import listQuestionAngka from "../data/listQuestionAngka.json";
import dataQuestionAngka from "../data/dataQuestionAngka.json";
import QuizSection from "../components/quizpage/QuizSection";

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
                            questionData={dataQuestionAngka}
                            questionType={"Kecermatan Angka"}
                            listQuestion={listQuestionAngka}
                        />
                    </section>
                )}
            </section>
        </>
    );
}

export default QuizPageAngka;
