import { useState } from 'react'
import { Col, Container, Form, Row, FloatingLabel, Button } from 'react-bootstrap'
import Input from '../../components/basic/Input'
import { useAuth } from '../provider/userProviderLogin'
import { formatoIso } from '../../helpers/date.js'
import { getIdUser } from '../../helpers/data.js'
import { createRent } from '../../services/rentas.js'
import { InfoLogin } from '../basic/AvisoLogin'
import { ToastCustom } from '../basic/Toasts'
export default function RegisterRent() {
    const token = sessionStorage.getItem('tokenSesion')
    const { userName, cars, users } = useAuth()
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [vehicleID, setVehicleID] = useState()
    const [isCreate, setIsCreate] = useState(false)

    const optionSelect = (e) => {
        setVehicleID(e.target.value)
    }

    const submitRent = () => {
        const newRent = {
            date_start: formatoIso(dateStart),
            date_end: formatoIso(dateEnd),
            user: getIdUser(userName, users),
            vehicle: vehicleID,
        }

        const fetchData = async () => {
            const response = await createRent(token, newRent)
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
                        info='Renta registrada!'
                        colorBg='success'
                    />
                </div>
            }
            {
                token ? <div className="container p-3 w-75">
                    <div className='w-100 d-block cristal p-5'>
                        <Container fluid='md'>
                            <h2 className="text-center text text-uppercase">Create  Rent</h2>
                            <Form>
                                <Row>
                                    <Col>
                                        <FloatingLabel
                                            controlId='userNameRent'
                                            label='User Name'
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                value={userName}
                                                disabled
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <Input
                                            label='Date Start'
                                            type='Date'
                                            placeholder='Date Start'
                                            valueState={dateStart}
                                            action={setDateStart}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            label='Date End'
                                            type='Date'
                                            placeholder='Date End'
                                            valueState={dateEnd}
                                            action={setDateEnd}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select aria-label='Select' size='lg' onChange={optionSelect}>
                                            <option>Select Vehicle</option>
                                            {
                                                cars && cars.map(car => {
                                                    const { id, car_make } = car
                                                    return <option key={id} value={id}>{car_make}</option>
                                                })
                                            }
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='mt-2'>
                                        <Button size='lg' onClick={submitRent}>Register Rent</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>
                    :
                    <InfoLogin />
            }
        </div>
    )
}