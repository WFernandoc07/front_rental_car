import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
const useUsers = (token) => {
    const [isData,setIsData]=useState(false)
    const [data, setData] = useState(null)
    useEffect(() => {
        if (!token) return console.log('no hay token', token)
        const fetchData = async () => {
            const response = await getUsers(token)
            setData(response.results)
            setIsData(true)
        };
        fetchData();
    }, [token]);
    return { data, isData }
}
export { useUsers }