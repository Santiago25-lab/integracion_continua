import { useState, useEffect } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#ffffff");

  useEffect(() => {
    // Cargar el color desde localStorage cuando el componente se monte
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
      setColor(savedColor); // Si hay un color guardado, usarlo
    }
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    localStorage.setItem("color", newColor); // Guardar el color en localStorage
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Selector de Colores</h1>

      <div
        data-testid="color-box"
        className="w-64 h-64 mb-4 border-2 border-gray-300"
        style={{ backgroundColor: color }}
      />

      <input
        role="color"
        className="p-2 border-2 border-gray-300 rounded"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
