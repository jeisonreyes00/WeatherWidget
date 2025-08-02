import React from 'react';
import type { ErrorMessageProps } from '../types/weather';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="text-center p-4 bg-red-900 border-2 border-red-700 text-red-200 rounded-xl shadow-lg">
            <p className="font-bold text-lg md:text-xl">Error:</p>
            <p className="text-sm md:text-base">{message}</p>
        </div>
    );
};

export default ErrorMessage;