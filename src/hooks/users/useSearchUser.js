import { useEffect, useState } from "react";
import { searchUser } from "../../services/users";
const useSearchUser = (id) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (!id) return console.log('no hay token', id)
        const fetchData = async () => {
            const response = await searchUser(id)
            setUser(response)
        };
        fetchData();
    }, []);
    return { user }
}
export { useSearchUser }