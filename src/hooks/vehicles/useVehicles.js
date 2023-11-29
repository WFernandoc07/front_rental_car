import { useEffect, useState } from "react";
import { getVehicles } from "../../services/vehicles";
const useVehicles = (token) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (!token) return console.log('no hay token', token)
        const fetchData = async () => {
            const response = await getVehicles(token)
            setData(response.results)
            console.log(response.results)
        };
        fetchData();
    }, []);
    return { data }
}
export { useVehicles, }