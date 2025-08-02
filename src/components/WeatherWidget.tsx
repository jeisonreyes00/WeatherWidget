import React from 'react';
import useWeather from '../hooks/useWeather';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import WeatherDisplay from './WeatherDisplay';

interface Props {
    city: string;
}

const WeatherWidget: React.FC<Props> = ({ city }) => {
    const { weatherData, loading, error } = useWeather(city);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-48 p-4 space-y-4">
                <LoadingSpinner />
                <p className="text-sm md:text-lg text-gray-300 text-center animate-pulse">
                    Cargando clima para{' '}
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-48 p-4">
                <ErrorMessage message={error} />
            </div>
        );
    }

    if (!weatherData) {
        return (
            <div className="flex flex-col justify-center items-center h-48 p-4 space-y-4">
                <p className="text-sm md:text-lg text-gray-300 text-center">
                    Por favor, ingresa una ciudad para ver el clima.
                </p>
            </div>
        );
    }

    return (
        <WeatherDisplay
            city={weatherData.city}
            temperature={weatherData.temperature}
            condition={weatherData.condition}
            icon={weatherData.icon}
        />
    );
};

export default WeatherWidget;
