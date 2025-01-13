import { useEffect } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft === 0) return; // Berhenti jika waktu habis

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Membersihkan interval saat komponen di-unmount
  }, [timeLeft, setTimeLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-fit w-fit bg-transparent">
      <div className="text-4xl lg:text-6xl font-bold text-white">{timeLeft}s</div>
    </div>
  );
};

CountdownTimer.propTypes = {
  timeLeft: PropTypes.number,
  setTimeLeft: PropTypes.func
};

export default CountdownTimer;
