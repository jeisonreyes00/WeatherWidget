import type { WeatherData } from '../types/weather';
import axiosInstance from './axiosInstance';

const mapMeteosourceIconToOpenWeatherMap = (meteosourceIcon: string): string => {
    switch (meteosourceIcon) {
        case 'clear-day': return '01d';
        case 'clear-night': return '01n';
        case 'partly-cloudy-day': return '02d';
        case 'partly-cloudy-night': return '02n';
        case 'cloudy': return '03d';
        case 'overcast': return '04d';
        case 'fog': return '50d';
        case 'drizzle': return '09d';
        case 'rain': return '10d';
        case 'sleet': return '13d';
        case 'snow': return '13d';
        case 'hail': return '09d';
        case 'thunderstorm': return '11d';
        case 'light-wind':
        case 'strong-wind': return '50d';
        default: return '01d';
    }
};

export const getCurrentWeather = async (city: string): Promise<WeatherData> => {
    try {
        const response = await axiosInstance.get('find_places', {
            params: { text: city },
        });

        const places = response.data;

        const { name, place_id } = places[0];

        const weatherResponse = await axiosInstance.get('point', {
            params: {
                place_id,
                sections: 'current',
                timezone: 'auto',
                language: 'en',
                units: 'metric',
            },
        });

        const weather = weatherResponse.data.current;

        if (!weather || weather.temperature === undefined || !weather.summary || !weather.icon) {
            throw new Error('Datos de clima incompletos o no disponibles.');
        }

        const result: WeatherData = {
            city: name,
            temperature: weather.temperature,
            condition: weather.summary,
            icon: mapMeteosourceIconToOpenWeatherMap(weather.icon),
        };

        return result;
    } catch (error: any) {
        console.error('[ERROR] getCurrentWeather falló:', error.message || error);
        throw error;
    }
};