import { useState } from "react";

export default function SearchList() {
  const [searchTerm, setSearchTerm] = useState("");
  const namesList = [
    "Juan",
    "Maria",
    "Carlos",
    "Ana",
    "Pedro",
    "Luis",
    "Laura",
    "Marta",
    "Felipe",
    "Clara",
  ];

  const filteredNames = namesList.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h1 className="text-4xl font-bold mb-4">Buscador en Lista</h1>
      <input
        type="text"
        className="p-2 border-2 border-gray-300 rounded"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="w-64 mt-4">
        {filteredNames.length > 0 ? (
          <ul className="space-y-2">
            {filteredNames.map((name, index) => (
              <li key={index} className="text-xl text-gray-700">
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xl text-gray-500">No encontrado</p>
        )}
      </div>
    </div>
  );
}
