import axios from 'axios';

const API_KEY: string = import.meta.env.VITE_METEOSOURCE_API_KEY;

const axiosInstance = axios.create({
    baseURL: 'https://www.meteosource.com/api/v1/free/',
    timeout: 10000,
    params: {
        key: API_KEY,
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessageDetail = error.response.data?.detail || error.response.statusText;
                console.error("Error de respuesta de la API:", error.response.data);

                switch (error.response.status) {
                    case 400:
                        return Promise.reject(new Error(`Error de solicitud: ${errorMessageDetail || 'Parámetro incorrecto.'}`));
                    case 401:
                        return Promise.reject(new Error(`Error de autenticación: ${errorMessageDetail || 'Tu clave de API es inválida o no fue proporcionada. Verifica tu configuración en el archivo .env.'}`));
                    case 402:
                        return Promise.reject(new Error(`Límite diario de solicitudes excedido: ${errorMessageDetail || 'Has superado el número máximo de peticiones para hoy.'}`));
                    case 403:
                        return Promise.reject(new Error(`Acceso denegado: ${errorMessageDetail || 'API key no especificada o inválida.'}`));
                    case 422:
                        return Promise.reject(new Error(`Error de validación: ${errorMessageDetail || 'Datos inválidos en la solicitud.'}`));
                    case 429:
                        return Promise.reject(new Error(`Límite de solicitudes por minuto excedido: ${errorMessageDetail || 'Has realizado demasiadas peticiones en poco tiempo. Espera un momento.'}`));
                    case 404:
                        return Promise.reject(new Error(`Recurso no encontrado: ${errorMessageDetail || 'La URL o los parámetros de la API podrían ser incorrectos.'}`));
                    default:
                        return Promise.reject(new Error(`Error de la API: ${error.response.status} - ${errorMessageDetail}`));
                }
            } else if (error.request) {
                console.error("Error de red: No se recibió respuesta del servidor.", error.request);
                return Promise.reject(new Error('Problema de conexión: No se pudo conectar con el servidor de clima. Revisa tu internet.'));
            } else {
                console.error("Error al configurar la solicitud:", error.message);
                return Promise.reject(new Error(`Error en la petición: ${error.message}`));
            }
        }
        console.error("Error inesperado:", error);
        return Promise.reject(new Error(`Ocurrió un error inesperado: ${error.message || 'Desconocido'}`));
    }
);

export default axiosInstance;
