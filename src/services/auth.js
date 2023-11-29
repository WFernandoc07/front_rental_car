
export async function SignIn(credenciales) {
    try {
        const response = await fetch('https://drf-boilerplate-app.onrender.com/auth/signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credenciales),
        });

        const result = await response.json();
        return result

    } catch (error) {
        console.error('Error en la función SignIn:', error.message);
        throw error;
    }
}

// En un archivo, por ejemplo, resetPassword.js

export const resetPassword = async (email) => {
    try {
        const response = await fetch('https://drf-boilerplate-app.onrender.com/auth/password/reset', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });

        if (!response.ok) {
            throw new Error('Error al restablecer la contraseña');
        }
        const data = await response.json();
        console.log('Respuesta exitosa:', data);
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
    }
};