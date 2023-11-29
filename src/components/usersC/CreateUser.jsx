import { Button, Form, Container, Stack, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastCustom } from "../basic/Toasts.jsx"
import Input from "../basic/Input.jsx"
import { createUser } from "../../services/users.js"

export default function CreateUser() {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    const [isCreate, setIsCreate] = useState(false)

    const handelCreateUser = (event) => {
        event.preventDefault()
        if (firstName === '' || lastName === '') return
        const newUser = {
            username: userName,
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password,
            password_confirmation: password
        }
        setIsCreate(!isCreate)
        const fetchData = async () => {
            const response = await createUser(newUser)
            if (typeof (response) === 'object') {
                setIsCreate(true)
            }
        }
        fetchData()
    }

    return (
        <div className='contenedor w-100'>
            {
                isCreate && <div className='position-absolute top-0 start-50 pt-4 m-auto'>
                    <ToastCustom
                        isActive={true}
                        info='User Creado!'
                        colorBg='success'
                    />
                </div>
            }
            <div className='w-50 d-block cristal p-5'>
                <Container fluid='md'>
                    <h2 className="text-center text text-uppercase">Create User</h2>
                    <Form>
                        <Input
                            type='text'
                            label='Frist Name'
                            value={firstName}
                            action={setFirstName}
                            placeholder=''
                        />
                        <Input
                            type='text'
                            label='Last Name'
                            value={lastName}
                            action={setLastName}
                            placeholder=''
                        />
                        <Input
                            type='email'
                            label='Email'
                            value={email}
                            action={setEmail}
                            placeholder=''
                        />
                        <Input
                            type='text'
                            label='User Name'
                            value={userName}
                            action={setUserName}
                            placeholder=''
                        />
                        <Input
                            type='password'
                            label='Password'
                            value={password}
                            action={setPassword}
                            placeholder=''
                        />
                        <Container>
                            <Row>
                                <Col>
                                    <Stack>
                                        <Button onClick={handelCreateUser} type="submit" size="lg">Create User</Button>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack>
                                        <Link to='/auth/login'
                                            className='text-decoration-none w-100'
                                        >
                                            <Button
                                                variant='outline-dark'
                                                size='lg'
                                                className="w-100"
                                            >
                                                Sign In
                                            </Button>
                                        </Link>
                                    </Stack>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Container>
            </div>
        </div>
    )
}