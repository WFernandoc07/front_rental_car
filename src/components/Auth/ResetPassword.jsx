import { Button, Container, Form, Stack } from "react-bootstrap";
import Input from "../basic/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ResetPassword() {
    const [email, setEmail] = useState()
    const handleSubmit = () => {

    }
    return (
        <div className='contenedor w-100'>
            <div className='w-50 d-block cristal p-5'>
                <Container fluid='md' className=' d-block w-75'>
                    <h2 className='text-center text-primary text-uppercase mb-5'>Reset Password</h2>
                    <Form>
                        <Input
                            type='email'
                            label='Email'
                            value={email}
                            action={setEmail}
                            placeholder=''
                        />
                    </Form>
                    <Stack gap={2} className="mx-auto">
                            <Button
                                variant='primary'
                                onClick={handleSubmit}
                                size='lg'
                            >
                                Reset Password
                            </Button>
                            <Link to='/users/create-user'>
                                <Button
                                    variant='outline-dark'
                                    size='lg'
                                    className='w-100'
                                >
                                    volver
                                </Button>
                            </Link>
                        </Stack>
                </Container>
            </div>
        </div>
    )
}