import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialTime: number; // El tiempo inicial en segundos
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer); // Detener el temporizador cuando llegue a 0
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(timer); // Limpiar el intervalo al desmontar el componente
  }, [timeLeft]);

  return (
    <div>
      <div data-testid="countdown-timer">{timeLeft}</div>
      {timeLeft > 0 && <button onClick={() => setTimeLeft(initialTime)}>Iniciar</button>}
    </div>
  );
};

export default CountdownTimer;
