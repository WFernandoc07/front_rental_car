export async function getVehicles(token) {
    const URL = 'https://drf-boilerplate-app.onrender.com/vehicles/?page=1&per_page=10'
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
export async function createVehicle(token, newVehicle) {
    try {
        const response = await fetch('https://drf-boilerplate-app.onrender.com/vehicles/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newVehicle),
        });

        if (!response.ok) {
            throw new Error('Error al registrar vehiculo');
        }

        const vehicleCreated = await response.json();

        return vehicleCreated;
    } catch (error) {
        console.error('Error al reistrar el vehiculo:', error);
    }
}
export async function deleteCar(id, token) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/vehicles/${id}/`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        console.log('Vehiculo eliminado: ' + id);
        if (response.status === 200) return true
    } catch (error) {
        console.error('Error al eliminar Vehiculo:', error);
        throw error;
    }
}
export async function updateCar(id, updateCar,token) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/vehicles/${id}/`, {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateCar)
        })
        const estado = response.ok
        return estado
    } catch (e) {
        throw new Error('Error al acutalizar Vehiculo')
    }
}
export async function searchCar(id,token) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/vehicles/${id}/`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const carSearch = await response.json();
        const detail = carSearch?.detail
        if (detail) return detail
        return carSearch;
    } catch (error) {
        console.error('Error al buscar el vehiculo:', error);
        throw error;
    }
}