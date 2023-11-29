import { Table } from 'react-bootstrap';
import { useAuth } from '../provider/userProviderLogin';
import { useVehicles } from '../../hooks/vehicles/useVehicles.js';
import { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ModalCard } from './Modal.Car';
import { deleteCar } from '../../services/vehicles.js';
import { InfoLogin } from '../basic/AvisoLogin';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
export default function ListCar() {
    const token = sessionStorage.getItem('tokenSesion')
    const { getCars } = useAuth()
    const { data } = useVehicles(token)
    const [newVehilces, setNewVehicles] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [carID, setCarID] = useState()
    const [carData, setCarData] = useState({})

    useEffect(() => {
        if (!data) return
        const newcarFilter = data.filter(car => car.condition !== 'inactive')
        setNewVehicles(newcarFilter)
        getCars(newcarFilter)
    }, [data, modalShow])

    const modificar = (id) => {
        setModalShow(!modalShow)
        const carModificar = newVehilces.find(car => car.id === id)
        setCarData(carModificar)
        setCarID(id)
    }
    const carDelete = (id) => {
        deleteCar(id, token)
        const newCars = newVehilces.filter(car => car.id !== id)
        setNewVehicles(newCars)
    }

    return (
        <>
            {
                token ? <div className="container p-3 w-75">
                    <h1 className="text-center p-4">My Cars</h1>
                    <Table striped bordered hover className="shadow">
                        <thead>
                            <tr className='text-center text-uppercase '>
                                <th>#</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Placa</th>
                                <th>Precio</th>
                                <th>Condición</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newVehilces && newVehilces.map((car, index) => {
                                    const { car_make, model, plate_num, price_day, id, condition } = car;
                                    return <tr key={index} className="text-center">
                                        <td>{index + 1}</td>
                                        <td>{car_make}</td>
                                        <td>{model}</td>
                                        <td>{plate_num}</td>
                                        <td>{price_day}</td>
                                        <td>{condition}</td>
                                        <td>
                                            <Row>
                                                <Col><Button onClick={() => modificar(id)}><CiEdit /></Button></Col>
                                                <Col><Button onClick={() => carDelete(id)} className='bg-danger border-0'><MdDeleteForever /></Button></Col>
                                            </Row>
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                modalShow && <ModalCard
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    id={carID}
                                    data={carData}
                                />
                            }
                        </tbody>
                    </Table>
                </div>
                    :
                    <InfoLogin />
            }
        </>
    )
}