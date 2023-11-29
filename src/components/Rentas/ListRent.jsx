import { useEffect, useState } from "react";
import { useRents } from "../../hooks/rents/useRents";
import { Table, Row, Button, Col } from "react-bootstrap";
import { ModalRent } from "./ModalRent";
import { transforDate } from "../../helpers/date.js";
import { InfoLogin } from "../basic/AvisoLogin";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

export function ListRent() {
    const token = sessionStorage.getItem('tokenSesion')
    const { data } = useRents(token)
    const [newRents, setNewRents] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [rentID, setRentID] = useState()
    const [rentData, setRenData] = useState({})

    useEffect(() => {
        setNewRents(data)
    }, [data, modalShow])
    const modificar = (id) => {
        setRentID(id)
        const newRent = newRents.find(rent => rent.id === id)
        setRenData(newRent)
        setModalShow(true)

    }
    const rentDelete = (id) => {
    }
    return (
        <>
            {
                token ? <div className="container p-3 w-75">
                    <h1 className="text-center p-4">My Rents</h1>
                    <Table striped bordered hover className="shadow">
                        <thead>
                            <tr className='text-center text-uppercase '>
                                <th>#</th>
                                <th>Date Start</th>
                                <th>Date End</th>
                                <th>Total Pay</th>
                                <th>User Name</th>
                                <th>First Name</th>
                                <th>Marca</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newRents && newRents.map((rent, index) => {
                                    const { date_start, date_end, total_pay, id } = rent;
                                    const newDateStart = transforDate(date_start)
                                    const newDateEnd = transforDate(date_end)
                                    const { username, first_name } = rent.user
                                    const { car_make } = rent.vehicle

                                    return <tr key={id} className="text-center">
                                        <td>{index + 1}</td>
                                        <td>{newDateStart}</td>
                                        <td>{newDateEnd}</td>
                                        <td>{total_pay}</td>
                                        <td>{username}</td>
                                        <td>{first_name}</td>
                                        <td>{car_make}</td>
                                        <td>
                                            <Row>
                                                <Col><Button onClick={() => modificar(id)}><CiEdit /></Button></Col>
                                                <Col><Button onClick={() => rentDelete(id)} className='bg-danger border-0'><MdDeleteForever /></Button></Col>
                                            </Row>
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                modalShow && <ModalRent
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    id={rentID}
                                    data={rentData}
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