import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDisplay from '../components/WeatherDisplay';

jest.mock('../utils/weatherTranslations');

describe('WeatherDisplay Component', () => {
    const weatherProps = {
        city: 'Bogotá',
        temperature: 14.7,
        condition: 'Clouds',
        icon: '04d',
    };

    it('debería renderizar la información del clima correctamente', () => {
        render(<WeatherDisplay {...weatherProps} />);

        expect(screen.getByRole('heading', { name: /Bogotá/i })).toBeInTheDocument();

        expect(screen.getByText('15')).toBeInTheDocument();
        expect(screen.getByText('°C')).toBeInTheDocument();

        expect(screen.getByText('Translated Clouds')).toBeInTheDocument();

        const weatherIcon = screen.getByRole('img');
        expect(weatherIcon).toHaveAttribute('alt', 'Translated Clouds');
        expect(weatherIcon).toHaveAttribute(
            'src',
            `https://openweathermap.org/img/wn/${weatherProps.icon}@2x.png`
        );
    });
});