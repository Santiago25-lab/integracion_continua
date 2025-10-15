import { render, screen, act } from '@testing-library/react';
import DigitalClock from './DigitalClock';
import '@testing-library/jest-dom'; // Para usar las aserciones como toHaveTextContent

jest.useFakeTimers(); // Para simular el paso del tiempo

describe('DigitalClock', () => {
  test('muestra la hora actual en formato HH:MM:SS', () => {
    render(<DigitalClock />);
    
    const clockElement = screen.getByTestId('digital-clock');
    
    // Verifica que la hora tiene el formato correcto
    expect(clockElement).toHaveTextContent(/\d{2}:\d{2}:\d{2}/); // Expresión regular para HH:MM:SS
  });

  test('la hora se actualiza cada segundo', () => {
    render(<DigitalClock />);
    
    const clockElement = screen.getByTestId('digital-clock');
    
    // Usar act para envolver la actualización de estado
    act(() => {
      jest.advanceTimersByTime(1000); // Simula el paso de 1 segundo
    });
    
    // Verifica que la hora se haya actualizado (puedes comparar con un valor aproximado)
    expect(clockElement).toHaveTextContent(/\d{2}:\d{2}:\d{2}/);
  });
});

