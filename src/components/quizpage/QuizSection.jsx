import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ScorePage from "./ScorePage";
import CountdownTimer from "./CountdownTimer";

function QuizSection({ questionType, questionData, listQuestion }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); 
  const [quizFinished, setQuizFinished] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const currentQuestion = listQuestion[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft === 0 && !quizFinished) {
      setQuizFinished(true);
      calculateAccuracy();
    }
  }, [timeLeft, quizFinished, score]);

  const calculateAccuracy = () => {
    const totalQuestions = listQuestion.length;
    const calculatedAccuracy = (score / totalQuestions) * 100;
    setAccuracy(calculatedAccuracy.toFixed(2));
  };

  const handleSelected = (option) => {
    let updatedScore = score;
    if (option === currentQuestion.answer) {
      updatedScore += 1;
      setScore(updatedScore);
      console.log(`Anda benar pada jawaban ${option} dengan score: ${updatedScore}`);
    } else {
      console.log(`Anda salah pada jawaban ${option} dengan score: ${updatedScore}`);
    }

    setTimeout(() => {
      if (currentQuestionIndex < listQuestion.length - 1 && timeLeft > 0) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else if (!quizFinished) {
        setQuizFinished(true);
        calculateAccuracy();
      }
    }, 100);
  };

  if (quizFinished) {
    return <ScorePage quizType={questionType} score={score} accuracy={accuracy} />;
  }

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <section className="mt-4 w-full flex flex-col">
        <div className="border-[1px] border-white flex flex-col h-fit">
          <div className="col-span-5 border-b-[1px] h-fit border-white p-4">
            <h1 className="text-[32px] lg:text-[48px] font-semibold text-white">{questionType}</h1>
          </div>

          <div className="flex flex-row">
            {questionData.map((item, index) => (
              <div key={index} className="w-full border-[1px] border-white">
                {item.answer.includes("&") || item.answer.includes("&#") ? (
                  // Render entitas HTML
                  <h1
                    className="text-[40px] lg:text-[64px] font-bold text-white"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></h1>
                ) : (
                  // Render teks biasa
                  <h1 className="text-[40px] lg:text-[64px] font-bold text-white">{item.answer}</h1>
                )}
              </div>
            ))}
        </div>

          <div className="flex flex-row">
            {questionData.map((item, index) => (
              <div className="w-full border-[1px] border-white p-2" key={index}>
                <h1 className="text-3xl lg:text-[40px] font-bold text-white">{item.option}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <div className="flex flex-row border-[1px] w-fit border-white mt-20">
            {currentQuestion.displayedOptions.map((option, index) => (
              <div className="text-2xl lg:text-4xl text-white font-bold p-1 lg:p-2" key={index}>
                {
                  option.includes("&") || option.includes("&#") ? (
                    // Render entitas HTML
                    <h1
                      className="font-bold text-white"
                      dangerouslySetInnerHTML={{ __html: option }}
                    ></h1>
                  ) : (
                    // Render teks biasa
                    <h1 className="font-bold text-white">{option}</h1>
                  )
                }
              </div>
            ))}
          </div>

          <div className="flex flex-row border-y-[1px] mt-2 border-white">
            {currentQuestion.options.map((option, index) => (
              <button
                onClick={() => handleSelected(option)}
                className={`text-2xl lg:text-4xl font-bold text-white p-2 lg:p-4 w-full border-x-[1px] border-white`}
                disabled={timeLeft === 0}
                key={index}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

QuizSection.propTypes = {
  questionType: PropTypes.string,
  listQuestion: PropTypes.array,
  questionData: PropTypes.array,
};

export default QuizSection;
