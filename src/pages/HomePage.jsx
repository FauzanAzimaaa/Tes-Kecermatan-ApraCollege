import { NavLink } from "react-router-dom";

function HomePage(){
    return(
        <>
            <section className="grid place-items-center h-screen">
                <div className="w-3/5 text-center flex flex-col items-center">
                    <h1 className="capital font-roboto text-secondary-400 font-semibold text-[24px]">Selamat Datang di tes kecermatan <span className="uppercase">Apra College</span></h1>
                    <h2 className="my-4 text-white w-2/3">Selamat datang di platform Tes Kecermatan Apra College, tempat Anda dapat mengukur tingkat ketelitian dan kecepatan berpikir Anda.</h2>
                    <NavLink to="/menu-quiz" className="text-white bg-secondary-400 hover:bg-secondary-500 font-medium rounded-lg text-sm px-5 py-2.5 mt-2">Cari tes kecermatan</NavLink>
                </div>
            </section>
        </>
    )
}

export default HomePage;