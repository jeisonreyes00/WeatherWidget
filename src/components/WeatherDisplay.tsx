import React from 'react';
import type { WeatherDisplayProps } from '../types/weather';
import { getTranslatedCondition } from '../utils/weatherTranslations';

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ temperature, condition, icon, city }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const translatedCondition = getTranslatedCondition(condition);
    const displayTemp = Math.round(temperature);

    const tempClasses = "text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-black mb-2 tracking-tight";
    const boxClasses = "inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20";
    const containerClasses = "text-center p-6 sm:p-8 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/20";

    return (
        <div className={containerClasses}>
            <div className="flex items-center justify-center mb-4">
                <svg className="w-6 h-6 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">
                    {city}
                </h2>
            </div>

            <div className="relative mb-6">
                <img
                    src={iconUrl}
                    alt={translatedCondition}
                    className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto filter drop-shadow-2xl transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-xl"></div>
            </div>

            <div className="space-y-3">
                <p className={tempClasses}>
                    {displayTemp}<span className="text-black">°C</span>
                </p>
                <div className={boxClasses}>
                    <p className="text-base sm:text-lg md:text-xl capitalize text-gray-700 font-medium">
                        {translatedCondition}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
