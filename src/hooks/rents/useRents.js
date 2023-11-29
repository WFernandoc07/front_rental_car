import { useEffect, useState } from "react";
import { getRents } from "../../services/rentas";
const useRents = (token) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (!token) return console.log('no hay token', token)
        const fetchData = async () => {
            const response = await getRents(token)
            setData(response.results)
            console.log(response.results)
        };
        fetchData();
    }, []);
    return { data }
}
export { useRents, }