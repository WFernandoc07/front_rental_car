import { Form, Row, Col, Button } from "react-bootstrap"
import { useState } from "react"
import { formatoIso, transforDate } from "/src/helpers/date"
import { useAuth } from "../provider/userProviderLogin"
import { updateRent } from "../../services/rentas.js"
import { ToastCustom } from "../basic/Toasts.jsx"
import Input from "../basic/Input.jsx"
export function UpdateRent({ data }) {
    const token = sessionStorage.getItem('tokenSesion')
    const { cars } = useAuth()
    const { date_start, date_end, id: idRent } = data
    const [dateStart, setDateStart] = useState(transforDate(date_start))
    const [dateEnd, setDateEnd] = useState(transforDate(date_end))
    const [vehicleID, setVehicleID] = useState()

    const [isOk, setIsOk] = useState()
    const [isNot, setIsNot] = useState()

    const handleUpdate = async () => {
        const newRent = {
            date_start: formatoIso(dateStart),
            date_end: formatoIso(dateEnd),
            vehicle: vehicleID
        }
        try {
            const estado = await updateRent(idRent, newRent, token)
            estado ? setIsOk(true) : setIsNot(true)
        } catch (error) {
            console.log(error)
        }
    }
    const optionSelect = (e) => {
        setVehicleID(e.target.value)
    }
    return (
        <><div className="w-50 m-auto pb-3 ps-5">
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
                        <Form.Select aria-label='Select' size='lg' onChange={optionSelect} defaultValue='asdasdad'>
                            <option>Select Vehicle</option>
                            {
                                cars && cars.map(car => {
                                    const { id, car_make } = car
                                    return <option key={id} value={id}>{car_make}</option>
                                })
                            }
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button size='lg' onClick={handleUpdate}>Update Rent</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}