import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage Component', () => {
    it('debería renderizar el mensaje de error correctamente', () => {
        const testMessage = 'No se pudo encontrar la ciudad.';
        render(<ErrorMessage message={testMessage} />);

        expect(screen.getByText('Error:')).toBeInTheDocument();

        expect(screen.getByText(testMessage)).toBeInTheDocument();
    });

    it('debería tener las clases CSS correctas para el estilo de error', () => {
        const { container } = render(<ErrorMessage message="Test" />);
        const div = container.firstChild;

        expect(div).toHaveClass(
            'text-center p-4 bg-red-900 border-2 border-red-700 text-red-200 rounded-xl shadow-lg'
        );
    });
});