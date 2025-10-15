import { render, screen, fireEvent, act } from '@testing-library/react';
import CountdownTimer from './CountdownTimer';
import '@testing-library/jest-dom';

jest.useFakeTimers(); // Para simular el paso del tiempo

describe('CountdownTimer', () => {
  test('muestra el tiempo inicial correctamente', () => {
    render(<CountdownTimer initialTime={10} />);
    
    const timerElement = screen.getByTestId('countdown-timer');
    
    // Verifica que el tiempo inicial sea el que le pasas como prop
    expect(timerElement).toHaveTextContent('10');
  });

  test('disminuye en intervalos de un segundo', () => {
    render(<CountdownTimer initialTime={10} />);
    
    const timerElement = screen.getByTestId('countdown-timer');
    
    // Usar act para envolver la actualización de estado
    act(() => {
      jest.advanceTimersByTime(1000); // Simula el paso de 1 segundo
    });
    
    // Verifica que el tiempo disminuyó
    expect(timerElement).toHaveTextContent('9');
  });

  test('se detiene en 0', () => {
    render(<CountdownTimer initialTime={2} />);
    
    const timerElement = screen.getByTestId('countdown-timer');
    
    // Simula el paso de 2 segundos (debería haber llegado a 0)
    act(() => {
      jest.advanceTimersByTime(2000); // Simula 2 segundos
    });
    
    // Verifica que el contador se detuvo en 0
    expect(timerElement).toHaveTextContent('0');
  });

  test('el contador se detiene cuando llega a 0', () => {
    render(<CountdownTimer initialTime={2} />);
    
    const timerElement = screen.getByTestId('countdown-timer');
    
    // Simula el paso de 3 segundos (debería haber llegado a 0)
    act(() => {
      jest.advanceTimersByTime(3000); // Simula 3 segundos
    });
    
    // Verifica que el contador no pase de 0
    expect(timerElement).toHaveTextContent('0');
  });

  test('el contador comienza cuando se hace clic en "Iniciar"', () => {
    render(<CountdownTimer initialTime={5} />);
    
    const startButton = screen.getByText('Iniciar');
    fireEvent.click(startButton);
    
    // Verifica que el temporizador haya comenzado
    const timerElement = screen.getByTestId('countdown-timer');
    expect(timerElement).toHaveTextContent('5');
  });
});
