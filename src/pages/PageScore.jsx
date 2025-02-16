import PropTypes from "prop-types";

function PageScore({ quizResults, totalCorrect }) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl shadow-xl overflow-hidden bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-base text-left text-primary border-collapse">
            <thead className="uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-2 py-3 sm:px-6 sm:py-4">No Kolom</th>
                <th scope="col" className="px-2 py-3 sm:px-6 sm:py-4">Terjawab</th>
                <th scope="col" className="px-2 py-3 sm:px-6 sm:py-4">Benar</th>
                <th scope="col" className="px-2 py-3 sm:px-6 sm:py-4">Salah</th>
                <th scope="col" className="px-2 py-3 sm:px-6 sm:py-4">Jumlah Soal</th>
              </tr>
            </thead>
            <tbody>
              {quizResults.map((result, index) => (
                <tr key={index} className="bg-transparent text-gray-800 text-center sm:text-lg font-medium border-b">
                  <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-200">{result.column}</td>
                  <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-200">{result.answered}</td>
                  <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-200">{result.correct}</td>
                  <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-200">{result.incorrect}</td>
                  <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-200">{result.totalQuestions}</td>
                </tr>
              ))}
              <tr className="bg-gray-100">
                <td colSpan="5" className="px-4 py-3 sm:px-6 sm:py-4 font-bold text-center">
                  Jumlah Benar = {totalCorrect}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

PageScore.propTypes = {
  quizResults: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
      answered: PropTypes.number.isRequired,
      correct: PropTypes.number.isRequired,
      incorrect: PropTypes.number.isRequired,
      totalQuestions: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalCorrect: PropTypes.number.isRequired,
};

export default PageScore;