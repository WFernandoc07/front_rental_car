import { Form, Row, Col, Stack, Button, FloatingLabel } from "react-bootstrap"
import { useState } from "react"
import { updateCar } from "../../services/vehicles.js"
import { ToastCustom } from "../basic/Toasts"
export function UpdateCar({ data }) {
    const token = sessionStorage.getItem('tokenSesion')
    const { car_make, model, plate_num, price_day, id, condition } = data

    const [marca, setMarca] = useState(car_make)
    const [modelo, setModelo] = useState(model)
    const [placa, setPlaca] = useState(plate_num)
    const [precio, setPrecio] = useState(price_day)
    const [condicion, setCondicion] = useState(condition)
    const [isOk, setIsOk] = useState()
    const [isNot, setIsNot] = useState()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const carUpdate = {
            car_make: marca,
            model: modelo,
            plate_num: placa,
            price_day: precio,
            condition: condicion
        }

        try {
            const estado = await updateCar(id, carUpdate, token)
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
                        info='Vehicle Update'
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
                            controlId='carMarca'
                            label='Marca'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='carModel'
                            label='Modelo'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={modelo}
                                onChange={(e) => setModelo(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='carPlaca'
                            label='Placa'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={placa}
                                onChange={(e) => setPlaca(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId='carPrecio'
                            label='Precio'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='carCondition'
                            label='Condición'
                            className='mb-3'
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                value={condicion}
                                onChange={(e) => setCondicion(e.target.value)}
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