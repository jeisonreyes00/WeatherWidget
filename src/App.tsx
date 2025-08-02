import React, { useState } from 'react';
import WeatherWidget from './components/WeatherWidget';
import './index.css';

function App(): React.ReactElement {
  const [inputCity, setInputCity] = useState<string>('');
  const [displayCity, setDisplayCity] = useState<string>('');

  const predefinedCities = ['Tunja', 'Bogotá', 'Medellín', 'Londres', 'Madrid', 'París', 'Nueva York', 'Sídney', 'Tokyo', 'Roma', 'Berlín'];

  React.useEffect(() => {
    if (predefinedCities.length > 0 && displayCity === '') {
      setDisplayCity(predefinedCities[0]);
      setInputCity(predefinedCities[0]);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputCity.trim() !== '') {
      setDisplayCity(inputCity.trim());
    }
  };

  const handlePredefinedCityClick = (selectedCity: string) => {
    setInputCity(selectedCity);
    setDisplayCity(selectedCity);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-cyan-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans text-sky-800">

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-900 mb-6 sm:mb-8 text-center">
        Pronóstico del Clima
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 w-full max-w-sm sm:max-w-md">
        <label htmlFor="city-input" className="block text-sky-800 text-sm sm:text-base font-bold mb-2">
          Ingresa una ciudad:
        </label>
        <input
          id="city-input"
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Ej: Nueva York, Tokio, Sídney"
          className="shadow appearance-none border-2 border-sky-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base sm:text-lg"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Buscar Clima
        </button>
      </form>

      <div className="w-full max-w-sm sm:max-w-md">
        <WeatherWidget city={displayCity} />
      </div>

      <div className="mt-6 sm:mt-8 w-full max-w-lg text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-800 mb-3">
          O elige una ciudad popular:
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {predefinedCities.map((predefinedCity) => (
            <button
              key={predefinedCity}
              onClick={() => handlePredefinedCityClick(predefinedCity)}
              className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              {predefinedCity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
