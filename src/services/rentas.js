export async function getRents(token) {
    const URL = 'https://drf-boilerplate-app.onrender.com/rents/?page=1&per_page=10'
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Error en la obtencion de vehiculos: ' + response.status);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al obtener vehiculos', error.message);
        throw error;
    }
}
export async function createRent(token, newRent) {
    try {
        const response = await fetch('https://drf-boilerplate-app.onrender.com/rents/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newRent),
        });

        const rentCreated = await response.json();
        console.log('Renta Registrada:', rentCreated);
        return rentCreated;
    } catch (error) {
        console.error('Error en el regristar renta:', error);
    }
}
export async function updateRent(id, updateRent, token) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/rents/${id}/`, {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateRent)
        })
        console.log('Renta actualizada: ', response.ok)
        const estado = response.ok
        return estado
    } catch (e) {
        throw new Error('Error al acutalizar Renta')
    }
}
export async function searchRent(id, token) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/rents/${id}/`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const rentSearch = await response.json();
        const detail = rentSearch?.detail
        if (detail) return detail
        console.log('Renta encontrada:', rentSearch);
        return rentSearch;
    } catch (error) {
        console.error('Error al buscar la renta:', error);
        throw error;
    }
}