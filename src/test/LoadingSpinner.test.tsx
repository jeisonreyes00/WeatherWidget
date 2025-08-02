import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
    it('debería renderizarse correctamente', () => {
        const { container } = render(<LoadingSpinner />);
        const spinnerDiv = container.querySelector('.animate-spin');

        expect(spinnerDiv).toBeInTheDocument();

        expect(spinnerDiv).toHaveClass(
            'animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-4 border-emerald-400 border-t-transparent'
        );
    });
});