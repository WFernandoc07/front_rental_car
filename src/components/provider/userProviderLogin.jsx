import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [userName, setUserName] = useState()
    const [cars, setCars] = useState()
    const [users, setUsers] = useState()

    const login = (newToken) => setToken(newToken)

    const getUserName = (newUserName) => setUserName(newUserName)

    const getCars = (newCars) => setCars(newCars)

    const logout = () => setToken(null)

    const getUsers = (users) => setUsers(users)

    return (
        <AuthContext.Provider value={{ token, userName, cars, users, getUsers, login, logout, getCars, getUserName }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
