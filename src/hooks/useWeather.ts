import { useState, useEffect } from 'react';
import { getCurrentWeather } from '../api/meteosource';
import type { WeatherData } from '../types/weather';

interface UseWeatherReturn {
    weatherData: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const useWeather = (city: string): UseWeatherReturn => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!city || city.trim() === '') {
            setLoading(false);
            setWeatherData(null);
            setError(null);
            return;
        }

        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getCurrentWeather(city);
                setWeatherData(data);
            } catch (err: any) {
                setError(err.message);
                setWeatherData(null);
            } finally {
                setLoading(false);
            }
        };

        const delayFetch = setTimeout(() => {
            fetchWeather();
        }, 500);

        return () => clearTimeout(delayFetch);
    }, [city]);

    return { weatherData, loading, error };
};

export default useWeather;