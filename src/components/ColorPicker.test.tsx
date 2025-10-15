import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker'; // Asegúrate de que la ruta sea correcta
import '@testing-library/jest-dom'; // Para usar las aserciones como toHaveTextContent

// Simular localStorage en los tests
beforeEach(() => {
  // Establecer un mock para localStorage
  const localStorageMock = (function () {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      clear: () => {
        store = {};
      },
    };
  })();

  // Asignar el mock al objeto window
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  // Espiar la función setItem de localStorage
  jest.spyOn(localStorage, 'setItem');
});

describe('ColorPicker', () => {
  test('muestra el color blanco inicialmente', () => {
    render(<ColorPicker />);

    // Selecciona el div que representa el color
    const divElement = screen.getByTestId('color-box');
    
    // Verifica que el fondo sea blanco
    expect(divElement).toHaveStyle('background-color: #ffffff');
  });

  test('cambia el color del fondo cuando se selecciona un color', () => {
    render(<ColorPicker />);

    // Selecciona el input de tipo color
    const inputColor = screen.getByRole('color');
    
    // Simula la selección de un color (por ejemplo, rojo)
    fireEvent.change(inputColor, { target: { value: '#ff0000' } });

    // Verifica que el color haya cambiado a rojo
    const divElement = screen.getByTestId('color-box');
    expect(divElement).toHaveStyle('background-color: #ff0000');
  });

  test('persiste el color seleccionado en localStorage', () => {
    render(<ColorPicker />);

    // Selecciona el input de tipo color
    const inputColor = screen.getByRole('color');
    
    // Simula la selección de un color (por ejemplo, verde)
    fireEvent.change(inputColor, { target: { value: '#00ff00' } });

    // Verifica que localStorage.setItem haya sido llamado con el valor correcto
    expect(localStorage.setItem).toHaveBeenCalledWith('color', '#00ff00');
  });

  test('carga el color guardado desde localStorage', () => {
    // Simula un valor guardado previamente en localStorage
    localStorage.getItem = jest.fn(() => '#ff0000');

    render(<ColorPicker />);

    // Verifica que el color cargado sea el rojo (#ff0000)
    const divElement = screen.getByTestId('color-box');
    expect(divElement).toHaveStyle('background-color: #ff0000');
  });
});
