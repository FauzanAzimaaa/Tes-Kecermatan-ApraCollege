import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Countdown({ initialTime, onTimeEnd }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft === 0) {
            if (onTimeEnd) onTimeEnd(); // Memanggil callback saat waktu habis
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Membersihkan timer
    }, [timeLeft, onTimeEnd]);

    return (
        <div
            className={`text-8xl font-bold text-white transition-transform duration-500 ease-out scale-125 opacity-100`}
        >
            <h1 className="text-4xl">Persiapan</h1>
            {timeLeft}
        </div>
    );
}

Countdown.propTypes = {
    initialTime: PropTypes.number,
    onTimeEnd: PropTypes.func,
};

export default Countdown;
