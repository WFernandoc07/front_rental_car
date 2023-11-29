import { Form, Button, Row, Col, Table } from "react-bootstrap"
import Input from "../basic/Input"
import { useState } from "react"
import { searchCar } from "../../services/vehicles.js"
import { InfoLogin } from "../basic/AvisoLogin"
import { CiSearch } from "react-icons/ci"
export default function SearchCar() {
    const token = sessionStorage.getItem('tokenSesion')
    const [search, setSearch] = useState('')
    const [car, setCar] = useState(null)
    const [isData, setIsData] = useState(true)

    const handleSearch = () => {
        const getCar = async () => {
            const car = await searchCar(search, token)
            if (typeof (car) === 'string')
                setIsData(false)
            if (typeof (car) === 'object') {
                setCar(car)
                car.condition === 'inactive' ? setIsData(false) : setIsData(true)
            }
        }
        getCar()
    }

    const { car_make, model, plate_num, price_day, id, condition } = car ? car : '';
    return (
        <>
            {
                token ? <div className="container w-75 pt-5 p-3">
                    <h1>Search Car</h1>
                    <Form>
                        <Row>
                            <Col>
                                <Input
                                    type='number'
                                    placeholder='Numero'
                                    value={search}
                                    action={setSearch}
                                />
                            </Col>
                            <Col>
                                <Button onClick={handleSearch}><CiSearch /> Search</Button>
                            </Col>
                        </Row>
                    </Form>
                    {
                        isData ? car &&
                            <Table striped bordered hover className="shadow">
                                <thead>
                                    <tr className='text-center text-uppercase '>
                                        <th>#</th>
                                        <th>Marca</th>
                                        <th>Modelo</th>
                                        <th>Placa</th>
                                        <th>Precio</th>
                                        <th>Condición</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td>{id}</td>
                                        <td>{car_make}</td>
                                        <td>{model}</td>
                                        <td>{plate_num}</td>
                                        <td>{price_day}</td>
                                        <td>{condition}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            : <h1>El vehiculo no existe</h1>
                    }
                </div>
                    :
                    <InfoLogin />
            }
        </>
    )
}