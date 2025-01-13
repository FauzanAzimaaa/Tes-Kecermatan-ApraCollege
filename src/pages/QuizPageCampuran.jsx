import { useState } from "react";
import QuizSectionCampuran from "../components/quizpage/QuizSectionCampuran";
import Countdown from "../components/quizpage/Countdown";
import listQuestionAngka from "../data/listQuestionAngka.json";
import dataQuestionAngka from "../data/dataQuestionAngka.json";
import listQuestionHuruf from "../data/listQuestionHuruf.json";
import dataQuestionHuruf from "../data/dataQuestionHuruf.json";
import listQuestionSimbol from "../data/listQuestionSimbol.json";
import dataQuestionSimbol from "../data/dataQuestionSimbol.json";
import ScorePageCampuran from "../components/quizpage/ScorePageCampuran";

function QuizPageCampuran() {
  const quizStages = [
    {
      questionType: "Kecermatan Angka",
      questionData: dataQuestionAngka,
      listQuestion: listQuestionAngka,
    },
    {
      questionType: "Kecermatan Huruf",
      questionData: dataQuestionHuruf,
      listQuestion: listQuestionHuruf,
    },
    {
      questionType: "Kecermatan Simbol",
      questionData: dataQuestionSimbol,
      listQuestion: listQuestionSimbol,
    },
  ];

  const [currentStage, setCurrentStage] = useState(0); // Menyimpan tahap saat ini
  const [isCountdown, setIsCountdown] = useState(true); // Menentukan apakah countdown ditampilkan
  const [quizResults, setQuizResults] = useState([]); // Menyimpan hasil dari semua kuis

  const handleQuizFinish = (quizType, score, accuracy) => {
    // Simpan hasil kuis
    setQuizResults((prevResults) => [
      ...prevResults,
      { quizType, score, accuracy },
    ]);

    if (currentStage < quizStages.length - 1) {
      // Jika masih ada kuis berikutnya, tampilkan countdown lagi
      setCurrentStage((prevStage) => prevStage + 1);
      setIsCountdown(true);
    } else {
      // Jika semua kuis selesai, hentikan countdown dan biarkan ScorePage ditampilkan
      setIsCountdown(false);
    }
  };

  if (currentStage >= (quizStages.length-1) && quizResults.length === quizStages.length) {
    console.log("Quiz Selesai", quizResults)
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-transparent text-center">
        <ScorePageCampuran quizResults={quizResults} />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center md:justify-start mt-0 md:mt-32 h-screen px-8 md:px-12 lg:px-28 bg-transparent text-center">
      {isCountdown ? (
        <Countdown
          initialTime={3}
          onTimeEnd={() => setIsCountdown(false)}
        />
      ) : (
        <QuizSectionCampuran
          questionType={quizStages[currentStage].questionType}
          questionData={quizStages[currentStage].questionData}
          listQuestion={quizStages[currentStage].listQuestion}
          onFinish={handleQuizFinish}
        />
      )}
    </section>
  );
}

export default QuizPageCampuran;