import React from 'react';
import ColorPicker from '../components/ColorPicker'; // Importamos el componente ColorPicker

const ColorPickerView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">Selector de Colores</h1>
      <ColorPicker /> {/* Aquí renderizamos el componente ColorPicker */}
    </div>
  );
};

export default ColorPickerView;
