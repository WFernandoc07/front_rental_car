import { Form, Row, Col, Stack, Button, FloatingLabel } from "react-bootstrap"
import { useState } from "react"
import { updateUser } from "../../services/users.js"
import { ToastCustom } from "../basic/Toasts.jsx"

export function UpdateUser({ data }) {
    const { username, email, first_name, last_name, id } = data

    const [userName, setUserName] = useState(username)
    const [emailUser, setEmailUser] = useState(email)
    const [firstName, setFirstName] = useState(first_name)
    const [lastName, setLastname] = useState(last_name)
    const [passwordUser, setPasswordUser] = useState('')
    const [isOk, setIsOk] = useState()
    const [isNot, setIsNot] = useState()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const userUpdate = {
            id: id,
            username: userName,
            email: emailUser,
            first_name: firstName,
            last_name: lastName,
            password: passwordUser
        }

        try {
            const estado = await updateUser(id, userUpdate)
            estado ? setIsOk(true) : setIsNot(true)

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="w-50 m-auto pb-3 ps-5">
                {
                    isOk && <ToastCustom
                        info='User Update'
                        colorBg='success'
                        isActive={true} />
                }
                {
                    isNot && <ToastCustom
                        info='check the data'
                        colorBg='danger'
                        isActive={true} />
                }
            </div>
            <Form>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId='UserName'
                            label='User Name'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='EmailUser'
                            label='Email'
                            className='mb-3'
                        >
                            <Form.Control
                                type='email'
                                placeholder=''
                                value={emailUser}
                                onChange={(e) => setEmailUser(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='FirstName'
                            label='First Name'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId='LastName'
                            label='Last Name'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='Password'
                            label='Password'
                            className='mb-3'
                        >
                            <Form.Control
                                type='password'
                                placeholder=''
                                value={passwordUser}
                                onChange={(e) => setPasswordUser(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Stack>
                    <Button type="submit" onClick={handleUpdate} size="lg">Actualizar</Button>
                </Stack>
            </Form>

        </>
    )
}