import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

function QuizSectionCampuran({ column, questionData, listQuestion, onFinish}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); 
  const [quizFinished, setQuizFinished] = useState(false);
  const [answered, setAnswered] = useState(0);
  const currentQuestion = listQuestion[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft === 0 && !quizFinished) {
      setQuizFinished(true);
      calculateScore();
    }
  }, [timeLeft, quizFinished]);

  const calculateScore = () => {
    const totalQuestions = listQuestion.length;
    onFinish(column, answered, score, answered - score, totalQuestions);
  };

  const handleSelected = (option) => {
    setAnswered((prevAnswered) => prevAnswered + 1);
    if (option === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestionIndex < listQuestion.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
      calculateScore();
    }
  };

  if (quizFinished) {
    return null;
  }

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <section className="mt-4 w-full flex flex-col">
        <div className="border-[1px] border-white flex flex-col h-fit">
          <div className="col-span-5 border-b-[1px] h-fit border-white p-4">
            <h1 className="text-[32px] lg:text-[48px] font-semibold text-white">{column}</h1>
          </div>

          <div className="flex flex-row">
            {questionData.map((item, index) => (
              <div key={index} className="w-full border-[1px] border-white">
                {item.answer.includes("&") || item.answer.includes("&#") ? (
                  <h1
                    className="text-[40px] lg:text-[64px] font-bold text-white"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></h1>
                ) : (
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
              <div className="text-2xl lg:text-5xl text-white font-bold p-1 lg:p-2" key={index}>
                {option.includes("&") || option.includes("&#") ? (
                  <h1
                    className="font-bold text-white"
                    dangerouslySetInnerHTML={{ __html: option }}
                  ></h1>
                ) : (
                  <h1 className="font-bold text-white">{option}</h1>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-row border-y-[1px] mt-2 border-white">
            {currentQuestion.options.map((option, index) => (
              <button
                onClick={() => handleSelected(option)}
                className="hover:bg-gray-400 text-2xl lg:text-4xl font-bold text-white p-2 lg:p-4 w-full border-x-[1px] border-white"
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

QuizSectionCampuran.propTypes = {
  column: PropTypes.string.isRequired,
  questionData: PropTypes.array.isRequired,
  listQuestion: PropTypes.array.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default QuizSectionCampuran;