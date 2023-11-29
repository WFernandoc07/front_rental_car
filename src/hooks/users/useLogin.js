import { useEffect, useState } from "react";
import { SignIn } from "../../services/auth";
export const useLogin = ({ credenciales }) => {
    const [isLogin, setIsLogin] = useState(false)
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            if (!credenciales) return
            const data = await SignIn(credenciales)
            const token = data?.tokens
            const detail = data?.detail
            if (detail) {
                console.log('Detalle: ', detail)
                setData(detail)
            }
            if (token) {
                console.log('tokens: ', token)
                setIsLogin(true)
                setData(token)
            }
        };
        fetchData();
    }, [credenciales]);
    return { isLogin, data }
}