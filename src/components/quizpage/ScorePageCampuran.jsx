import PropTypes from "prop-types";

function ScorePageCampuran({ quizResults }) {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-secondary-500 mb-12">
        Hasil Kuis
      </h1>
      <div className="flex flex-wrap justify-center">
        {quizResults.map((result, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow mb-6 w-3/4"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {result.quizType}
            </h2>
            <p className="text-lg text-gray-700">
              Total Benar: {result.score}
            </p>
            <p className="text-lg text-gray-700">
              Akurasi: {result.accuracy}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

ScorePageCampuran.propTypes = {
  quizResults: PropTypes.arrayOf(
    PropTypes.shape({
      quizType: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      accuracy: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScorePageCampuran;