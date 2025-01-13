import QuizCard from "../components/menuquiz/QuizCard";

function MenuQuizPage(){
    const quizTitle = ["Tes Kecermatan Gabungan", "Tes Kecermatan Numerikal", "Tes Kecermatan Alfabet", "Tes Kecermatan Simbol"]
    const quizDescription = ["Tes ini menguji kemampuan dan kecermatan yang terdiri dari angka, huruf, dan simbol.", "Tes ini menguji kemampuan dan kecermatan angka.", "Tes ini menguji kemampuan dan kecermatan huruf.", "Tes ini menguji kemampuan dan kecermatan simbol."]

    return(
        <>
            <section className="flex flex-row justify-evenly flex-wrap h-fit md:h-screen w-full pt-5 pb-20 md:p-20">
                <QuizCard testTitle={quizTitle[0]} testDesc={quizDescription[0]} testType="campuran"/>
                <QuizCard testTitle={quizTitle[1]} testDesc={quizDescription[1]} testType="angka"/>
                <QuizCard testTitle={quizTitle[2]} testDesc={quizDescription[2]} testType="huruf"/>
                <QuizCard testTitle={quizTitle[3]} testDesc={quizDescription[3]} testType="simbol"/>
            </section>
        </>
    )
}

export default MenuQuizPage;