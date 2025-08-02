export interface WeatherData {
    city: string;
    temperature: number;
    condition: string;
    icon: string;
}

export interface WeatherDisplayProps {
    city: string;
    temperature: number;
    condition: string;
    icon: string;
}

export interface WeatherWidgetProps {
    city: string;
}

export interface ErrorMessageProps {
    message: string;
}