import PropTypes from "prop-types";

function ScorePage({quizType, score, accuracy}){
    return(
        <>
            <div className="flex flex-col justify-center"> 
                <h1 className="text-5xl font-bold text-secondary-500 mb-12">{quizType}</h1>   
                <div href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">
                        Total Benar {score} 
                    </h2>
                    <h4 className="font-normal text-xl text-secondary-500 ">Dengan Akurasi {accuracy}%</h4>
                </div>
            </div>
        </>
    )
}

ScorePage.propTypes = {
    quizType : PropTypes.string,Type : PropTypes.string,
    score : PropTypes.number,
    accuracy : PropTypes.string
};

export default ScorePage;