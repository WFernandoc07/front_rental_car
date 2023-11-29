import { Button, Form, Container, Stack, Row, Col } from "react-bootstrap"
import { useState } from "react"
import Input from '../basic/Input'
import { createVehicle } from "../../services/vehicles.js"
import { InfoLogin } from "../basic/AvisoLogin"
import { ToastCustom } from "../basic/Toasts"

export default function RegisterCar() {
    const token = sessionStorage.getItem('tokenSesion')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [placa, setPlaca] = useState('')
    const [precio, setPrecio] = useState('')
    const [condicion, setCondicion] = useState('')
    const [isCreate, setIsCreate] = useState(false)

    const handelCreateCar = (event) => {
        event.preventDefault()
        const newCar = {
            car_make: marca,
            model: modelo,
            plate_num: placa,
            price_day: precio,
            condition: condicion
        }
        console.log(newCar)
        const fetchData = async () => {
            const response = await createVehicle(token, newCar)
            if (typeof (response) === 'object') {
                setIsCreate(true)
            }
        }
        fetchData()
    }
    return (
        <div className="contenedor w-100">
            {
                isCreate && <div className='position-absolute top-0 start-50 pt-4 m-auto'>
                    <ToastCustom
                        isActive={true}
                        info='Vehículo registrado!'
                        colorBg='success'
                    />
                </div>
            }
            {
                token ? <div className='w-100 h-100 m-auto'>
                    <div className='w-75 d-block p-5 m-auto'>
                        <Container fluid='md'>
                            <h2 className="text-center text text-uppercase mb-4">Register Car</h2>
                            <Form>
                                <Row>
                                    <Col>
                                        <Input
                                            type='text'
                                            label='Marca'
                                            value={marca}
                                            action={setMarca}
                                            placeholder=''
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            type='text'
                                            label='Modelo'
                                            value={modelo}
                                            action={setModelo}
                                            placeholder=''
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            type='text'
                                            label='Placa'
                                            value={placa}
                                            action={setPlaca}
                                            placeholder=''
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input
                                            type='text'
                                            label='Precio'
                                            value={precio}
                                            action={setPrecio}
                                            placeholder=''
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            type='text'
                                            label='Condición'
                                            value={condicion}
                                            action={setCondicion}
                                            placeholder=''
                                        />
                                    </Col>
                                </Row>
                                <Stack>
                                    <Button onClick={handelCreateCar} type="submit" size="lg">Register Car</Button>
                                </Stack>
                            </Form>
                        </Container>
                    </div >
                </div >
                    :
                    <InfoLogin />
            }
        </div>
    )
}