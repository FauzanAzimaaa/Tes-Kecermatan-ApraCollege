import { useState } from "react";
import QuizSection from "../components/quizpage/QuizSection"
import Countdown from "../components/quizpage/Countdown";
import PageScore from "./PageScore";
import listQuestionAngka from "../data/angka/listQuestionAngka.json";
import dataQuestionAngka from "../data/angka/dataQuestionAngka.json";

function QuizPageAngka() {
    const [currentStage, setCurrentStage] = useState(0)
    const [isCountdown, setIsCountdown] = useState(true)
    const [quizResults, setQuizResults] = useState([])
    const quizStages = [
        {
            title : "Kolom 1",
            questionData : dataQuestionAngka[0],
            listQuestion : listQuestionAngka[0]
        },
        {
            title : "Kolom 2",
            questionData : dataQuestionAngka[1],
            listQuestion : listQuestionAngka[1]
        },
        {
            title : "Kolom 3",
            questionData : dataQuestionAngka[2],
            listQuestion : listQuestionAngka[2]
        },
        {
            title : "Kolom 4",
            questionData : dataQuestionAngka[3],
            listQuestion : listQuestionAngka[3]
        },
        {
            title : "Kolom 5",
            questionData : dataQuestionAngka[4],
            listQuestion : listQuestionAngka[4]
        },
        {
            title : "Kolom 6",
            questionData : dataQuestionAngka[5],
            listQuestion : listQuestionAngka[5]
        },
        {
            title : "Kolom 7",
            questionData : dataQuestionAngka[6],
            listQuestion : listQuestionAngka[6]
        },
        {
            title : "Kolom 8",
            questionData : dataQuestionAngka[7],
            listQuestion : listQuestionAngka[7]
        },
        {
            title : "Kolom 9",
            questionData : dataQuestionAngka[8],
            listQuestion : listQuestionAngka[8]
        },
        {
            title : "Kolom 10",
            questionData : dataQuestionAngka[9],
            listQuestion : listQuestionAngka[9]
        },
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

export default QuizPageAngka;
