import React from 'react';
import DigitalClock from '../components/DigitalClock'; // Importar el componente DigitalClock

const DigitalClockView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Reloj Digital</h1>
        <div className="text-6xl font-mono text-gray-700">
          <DigitalClock /> {/* Aquí renderizamos el componente DigitalClock */}
        </div>
      </div>
    </div>
  );
};

export default DigitalClockView;
