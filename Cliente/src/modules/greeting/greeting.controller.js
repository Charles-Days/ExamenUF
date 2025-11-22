const GreetingController = {};
const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

GreetingController.saludar = async (nombres, apellidos) => {
    try {
        const response = await fetch(`${API_URL}/saludar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombres, apellidos })
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return { success: false, message: 'Error al conectar con el API', data: null };
    }
}

export default GreetingController;
