import { Form, Button, Row, Col, Table } from "react-bootstrap"
import { useState } from "react"
import { searchRent } from "../../services/rentas.js"
import { transforDate } from "../../helpers/date.js"
import { InfoLogin } from "../basic/AvisoLogin.jsx"
import Input from "../basic/Input.jsx"
export default function SearchRent() {
    const token = sessionStorage.getItem('tokenSesion')
    const [search, setSearch] = useState('')
    const [rent, setRent] = useState(null)
    const [isData, setIsData] = useState(true)

    const handleSearch = () => {
        const getRent = async () => {
            const rent = await searchRent(search, token)
            if (typeof (rent) === 'string')
                setIsData(false)
            if (typeof (rent) === 'object') {
                setRent(rent)
                rent.condition === 'inactive' ? setIsData(false) : setIsData(true)
            }
        }
        getRent()
    }

    const { date_start, date_end, total_pay, id } = rent ? rent : '';
    const newDateStart = date_start && transforDate(date_start)
    const newDateEnd = date_end && transforDate(date_end)
    const { username, first_name } = rent ? rent.user : ''
    const { car_make } = rent ? rent.vehicle : ''



    return (
        <>
            {
                token ? <div className="container w-75 pt-5 p-3">
                    <h1>Search Rent</h1>
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
                                <Button onClick={handleSearch}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                    {
                        isData ? rent &&
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td>{id}</td>
                                        <td>{newDateStart}</td>
                                        <td>{newDateEnd}</td>
                                        <td>{total_pay}</td>
                                        <td>{username}</td>
                                        <td>{first_name}</td>
                                        <td>{car_make}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            : <h1>La renta no existe</h1>
                    }
                </div>
                    :
                    <InfoLogin />
            }
        </>
    )
}