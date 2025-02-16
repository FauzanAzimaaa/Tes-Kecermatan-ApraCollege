import { useState } from "react";
import QuizSection from "../components/quizpage/QuizSection"
import Countdown from "../components/quizpage/Countdown";
import PageScore from "./PageScore";
import listQuestionHuruf from "../data/huruf/listQuestionHuruf.json";
import dataQuestionHuruf from "../data/huruf/dataQuestionHuruf.json";

function QuizPageHuruf() {
    const [currentStage, setCurrentStage] = useState(0)
    const [isCountdown, setIsCountdown] = useState(true)
    const [quizResults, setQuizResults] = useState([])
    const quizStages = [
        {
            title : "Kolom 1",
            questionData : dataQuestionHuruf[0],
            listQuestion : listQuestionHuruf[0]
        },
        {
            title : "Kolom 2",
            questionData : dataQuestionHuruf[1],
            listQuestion : listQuestionHuruf[1]
        },
        {
            title : "Kolom 3",
            questionData : dataQuestionHuruf[2],
            listQuestion : listQuestionHuruf[2]
        },
        {
            title : "Kolom 4",
            questionData : dataQuestionHuruf[3],
            listQuestion : listQuestionHuruf[3]
        },
        {
            title : "Kolom 5",
            questionData : dataQuestionHuruf[4],
            listQuestion : listQuestionHuruf[4]
        },
        {
            title : "Kolom 6",
            questionData : dataQuestionHuruf[5],
            listQuestion : listQuestionHuruf[5]
        },
        {
            title : "Kolom 7",
            questionData : dataQuestionHuruf[6],
            listQuestion : listQuestionHuruf[6]
        },
        {
            title : "Kolom 8",
            questionData : dataQuestionHuruf[7],
            listQuestion : listQuestionHuruf[7]
        },
        {
            title : "Kolom 9",
            questionData : dataQuestionHuruf[8],
            listQuestion : listQuestionHuruf[8]
        },
        {
            title : "Kolom 10",
            questionData : dataQuestionHuruf[9],
            listQuestion : listQuestionHuruf[9]
        }
    ]

    const handleQuizFinish = (column, answered, correct, incorrect, totalQuestions) => {
      console.log("handleQuizFinish", column, answered, correct, incorrect)
        setQuizResults((prevResults) => [
          ...prevResults,
          { column, answered, correct, incorrect, totalQuestions},
        ]);
    
        if (currentStage < quizStages.length - 1) {
          console.log("current stage : ", currentStage);
          setCurrentStage((prevStage) => prevStage + 1);
          setIsCountdown(true);
        } else {
          console.log("current stage : ", currentStage);
          setIsCountdown(false);
        }
    };

    if (currentStage >= (quizStages.length - 1) && quizResults.length === quizStages.length) {
      const totalCorrect = quizResults.reduce((acc, result) => acc + result.correct, 0);
      return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 md:py-20 text-center">
          <PageScore quizResults={quizResults} totalCorrect={totalCorrect} />
        </section>
      );
    }  
    
    return (
      <>
        <section className="flex flex-col items-center justify-center h-screen bg-transparent text-center">
          {isCountdown ? (
            <Countdown
              initialTime={3}
              onTimeEnd={() => setIsCountdown(false)}
            />
          ) : (
            <div className="flex flex-col items-center mt-8 md:justify-center h-full w-full py-8 px-8 md:px-12 lg:px-28">
              <QuizSection
                column={quizStages[currentStage]?.title}
                questionData={quizStages[currentStage]?.questionData}
                listQuestion={quizStages[currentStage]?.listQuestion}
                onFinish={handleQuizFinish}
              />
            </div>
          )}
        </section>
      </>
    );      
}

export default QuizPageHuruf;
