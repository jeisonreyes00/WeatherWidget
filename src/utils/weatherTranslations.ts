const weatherTranslations: Record<string, string> = {
    "clear": "Despejado",
    "partly cloudy": "Algo nublado",
    "cloudy": "Nublado",
    "light rain": "Lluvia ligera",
    "rain": "Lluvia",
    "heavy rain": "Lluvia fuerte",
    "thunderstorm": "Tormenta eléctrica",
    "snow": "Nieve",
    "fog": "Niebla",
    "mist": "Bruma",
    "overcast": "Cielo cubierto",
    "drizzle": "Llovizna",
    "haze": "Neblina",
    "smoke": "Humo",
    "tornado": "Tornado",
    "sleet": "Aguanieve",
    "freezing rain": "Lluvia helada",
};

export const getTranslatedCondition = (condition: string): string =>
    weatherTranslations[condition.toLowerCase()] ?? condition;
