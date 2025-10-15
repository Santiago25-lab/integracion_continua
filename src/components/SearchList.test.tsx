import { render, screen, fireEvent } from '@testing-library/react';
import SearchList from './SearchList'; // Importa tu componente correctamente

describe('SearchList', () => {
  test('muestra todos los nombres inicialmente', () => {
    render(<SearchList />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(7); // Asegúrate de que haya 7 elementos inicialmente
  });

  test('filtra los nombres cuando se escribe en el input', () => {
    render(<SearchList />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'Maria' } });

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1); // Solo "Maria" debe coincidir
    expect(listItems[0]).toHaveTextContent('Maria'); // Asegúrate de que "Maria" esté en la lista filtrada
  });

  test('muestra mensaje "No encontrado" cuando no hay coincidencias', () => {
    render(<SearchList />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'NoCoincide' } });

    const message = screen.getByText('No encontrado');
    expect(message).toBeInTheDocument(); // Asegúrate de que el mensaje de "No encontrado" se muestre
  });
});
