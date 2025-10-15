import { useState } from 'react'; // Solo importamos 'useState'


const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const names = ['Maria', 'Juan', 'Carlos', 'Ana', 'Pedro', 'Lucia', 'Sofia'];

  const filteredNames = names.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredNames.length === 0 ? (
          <li>No encontrado</li>
        ) : (
          filteredNames.map((name, index) => <li key={index}>{name}</li>)
        )}
      </ul>
    </div>
  );
};

export default SearchList;
