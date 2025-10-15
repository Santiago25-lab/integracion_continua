import React, { useState, useEffect } from 'react';


const CountdownTimerView: React.FC = () => {
  const [initialTime, setInitialTime] = useState(10); // Tiempo inicial en segundos, puedes cambiarlo a cualquier valor
  const [timeLeft, setTimeLeft] = useState(initialTime); // Tiempo restante
  const [isCounting, setIsCounting] = useState(false); // Estado para saber si el contador está en marcha

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    if (isCounting && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0)); // Reducir el tiempo
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonte
      }
    };
  }, [isCounting, timeLeft]);

  const handleStart = () => {
    setTimeLeft(initialTime); // Reiniciar el contador con el tiempo inicial
    setIsCounting(true); // Iniciar el contador
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value, 10);
    if (!isNaN(newTime)) {
      setInitialTime(newTime); // Actualizar el valor del tiempo inicial
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contador Regresivo</h1>
        
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Tiempo inicial (segundos):</label>
          <input
            type="number"
            value={initialTime}
            onChange={handleChange}
            className="mt-2 p-2 w-1/2 border border-gray-300 rounded-lg"
            disabled={isCounting} // Deshabilitar el input mientras el contador está en marcha
          />
        </div>
        
        {/* Mostrar el contador */}
        <div className="text-6xl font-mono text-gray-700 mb-6">
          {timeLeft}
        </div>

        <button
          onClick={handleStart}
          className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          disabled={isCounting} // Deshabilitar el botón "Iniciar" mientras el contador está en marcha
        >
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default CountdownTimerView;
