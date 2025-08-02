import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div data-testid="loading-spinner" className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-4 border-emerald-400 border-t-transparent shadow-lg"></div>
        </div>
    );
};


export default LoadingSpinner;