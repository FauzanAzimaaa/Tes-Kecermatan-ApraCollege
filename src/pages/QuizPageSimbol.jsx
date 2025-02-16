import { useState } from "react";
import QuizSection from "../components/quizpage/QuizSection"
import Countdown from "../components/quizpage/Countdown";
import PageScore from "./PageScore"
import listQuestionSimbol from "../data/simbol/listQuestionSimbol.json"
import dataQuestionSimbol from "../data/simbol/dataQuestionSimbol.json"

function QuizPageSimbol() {
    const [currentStage, setCurrentStage] = useState(0)
    const [isCountdown, setIsCountdown] = useState(true)
    const [quizResults, setQuizResults] = useState([])
    const quizStages = [
          {
              title : "Kolom 1",
              questionData : dataQuestionSimbol[0],
              listQuestion : listQuestionSimbol[0]
          },
          {
              title : "Kolom 2",
              questionData : dataQuestionSimbol[1],
              listQuestion : listQuestionSimbol[1]
          },
          {
              title : "Kolom 3",
              questionData : dataQuestionSimbol[2],
              listQuestion : listQuestionSimbol[2]
          },
          {
              title : "Kolom 4",
              questionData : dataQuestionSimbol[3],
              listQuestion : listQuestionSimbol[3]
          },
          {
              title : "Kolom 5",
              questionData : dataQuestionSimbol[4],
              listQuestion : listQuestionSimbol[4]
          },
          {
              title : "Kolom 6",
              questionData : dataQuestionSimbol[5],
              listQuestion : listQuestionSimbol[5]
          },
          {
              title : "Kolom 7",
              questionData : dataQuestionSimbol[6],
              listQuestion : listQuestionSimbol[6]
          },
          {
              title : "Kolom 8",
              questionData : dataQuestionSimbol[7],
              listQuestion : listQuestionSimbol[7]
          },
          {
              title : "Kolom 9",
              questionData : dataQuestionSimbol[8],
              listQuestion : listQuestionSimbol[8]
          },
          {
              title : "Kolom 10",
              questionData : dataQuestionSimbol[9],
              listQuestion : listQuestionSimbol[9]
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

export default QuizPageSimbol;
