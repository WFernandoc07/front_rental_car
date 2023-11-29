import { useEffect, useState, } from 'react'
import Input from '../basic/Input'
import { Form, Button, Stack, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/users/useLogin.js'
import { useAuth } from '../provider/userProviderLogin'
import { SniperLogin } from '../basic/SniperLogin'
import { FaUserCircle } from "react-icons/fa"
import { ToastCustom } from '../basic/Toasts'
function Login() {
    const [tokenLogin,setTokenLogin]=useState(null)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [credenciales, setCredenciales] = useState(null)
    const { isLogin, data } = useLogin({ credenciales })
    const { login, getUserName } = useAuth()
    const [activeLoading, setActiveLoading] = useState(true)

    const handleLogin = async (event) => {
        event.preventDefault()
        if (user === '' || password === '') return
        setCredenciales({ username: user, password: password })
        setActiveLoading(false)
    }
    useEffect(() => {
        if (isLogin) {
            const { access_token } = data
            setTokenLogin(access_token)
            login(access_token)
            getUserName(user)
            setActiveLoading(true)
            sessionStorage.setItem('tokenSesion',tokenLogin)
        }
        if (typeof (data) === 'string') {
            setActiveLoading(true)
        }
    }, [isLogin, data, activeLoading])


    return (
        <div className='contenedor w-100'>
            {
                isLogin && <div className='position-absolute top-0 start-50 pt-4 m-auto'>
                    <ToastCustom
                        isActive={isLogin}
                        info='Login successful'
                        colorBg='success'
                    />
                </div>
            }
            {
                typeof (data) === 'string' && <div className='position-absolute top-0 start-50 pt-4 m-auto'>
                    <ToastCustom
                        isActive={true}
                        info={data}
                        colorBg='danger'
                    />
                </div>
            }
            <div className='w-50 d-block cristal p-5'>
                <Container fluid='md' className=' d-block w-100'>
                    <div className='w-100'>
                        <img src='/logo.svg' className='w-50 d-block m-auto mb-4' />
                        <h2 className='text-center text-uppercase mb-5'><FaUserCircle className='h2 me-2' />Login</h2>
                    </div>
                    <Form>
                        <Input
                            type='text'
                            label='User Name'
                            placeholder='user@example.com'
                            valueState={user}
                            action={setUser}
                        />
                        <Input
                            type='password'
                            label='Password'
                            placeholder=''
                            valueState={password}
                            action={setPassword}
                        />
                        <Stack gap={2} className="mx-auto">
                            <Button
                                variant='primary'
                                onClick={handleLogin}
                                size='lg'
                            >
                                Sign In
                            </Button>
                            <Link to='/users/create-user'>
                                <Button
                                    variant='outline-dark'
                                    size='lg'
                                    className='w-100'
                                >
                                    Create User
                                </Button>
                            </Link>
                        </Stack>
                    </Form>
                </Container>
                {
                    activeLoading ? '' : <div className='d-flex justify-content-center'> <SniperLogin /> <p className='p-2'> Loading....</p></div>
                }

            </div>
        </div >
    )
}

export default Login
