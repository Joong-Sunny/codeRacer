import { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number;
  onTimeUp?: () => void;
}

const useTimer = ({ initialTime, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !isTimeUp) {
      // escape timer!!!
      // Prevents the onTimeUp callback from being called multiple times
      setIsTimeUp(true);
      if (onTimeUp) {
        onTimeUp();
      }
    }
  }, [timeLeft, isTimeUp, onTimeUp]);

  return { timeLeft, isTimeUp, setTimeLeft, setIsTimeUp };
};

export default useTimer;
