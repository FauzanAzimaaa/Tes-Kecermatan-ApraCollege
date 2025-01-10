import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function QuizCard({testTitle, testDesc, testType}){
    return(
        <>
            <div className="max-w-[300px] h-fit bg-white border border-gray-200 rounded-lg shadow mt-8">
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{testTitle}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{testDesc}</p>
                    <Link to={`/quiz-${testType}`} className="mr-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Kerjakan tes
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

QuizCard.propTypes = {
    testTitle: PropTypes.string,
    testDesc: PropTypes.string,
    testType: PropTypes.string
}

export default QuizCard;