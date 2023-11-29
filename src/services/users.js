export async function getUsers(token) {
    const URL = 'https://drf-boilerplate-app.onrender.com/users/?page=1&per_page=10'
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Error en la obtencion de usuarios: ' + response.status);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al obtener usuarios', error.message);
        throw error;
    }
}

export async function createUser(newUser) {
    console.log('desded la f crear', newUser)
    try {
        const response = await fetch('https://drf-boilerplate-app.onrender.com/auth/signup/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }

        const userCreated = await response.json();
        console.log('Usuario creado:', userCreated);

        return userCreated;
    } catch (error) {
        console.error('Error en la creación del usuario:', error);
    }
}


export async function searchUser(id) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/users/${id}/`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        });
        const userSearch = await response.json();
        const detail = userSearch?.detail
        if (detail) return detail
        console.log('Usuario Encontrado:', userSearch);
        return userSearch;
    } catch (error) {
        console.error('Error busqueda del usuario:', error);
        throw error;
    }
}
export async function deleteUser(id) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/users/${id}/`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
            },
        });
        console.log('Usuario Eliminado: ' + id);
        if (response.status === 200) return true
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
    }
}

export async function updateUser(id, udpateUser) {
    try {
        const response = await fetch(`https://drf-boilerplate-app.onrender.com/users/${id}/`, {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(udpateUser)
        })
        console.log(response.ok)
        const estado = response.ok
        return estado
    } catch (e) {
        throw new Error('Error al acutalizar user')
    }
}