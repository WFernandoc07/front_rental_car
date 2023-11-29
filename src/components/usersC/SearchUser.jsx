import { Form, Button, Row, Col, Table } from "react-bootstrap"
import Input from "../basic/Input.jsx"
import { useState } from "react"
import { searchUser } from "../../services/users.js"
import { InfoLogin } from "../basic/AvisoLogin.jsx"
import { RiUserSearchLine } from "react-icons/ri"
export default function SearchUser() {
    const token = sessionStorage.getItem('tokenSesion')
    const [search, setSearch] = useState('')
    const [user, setUser] = useState(null)
    const [isData, setIsData] = useState(true)
    const handleSearch = () => {
        const getUser = async () => {
            const user = await searchUser(search)
            setUser(user)
            if (typeof (user) === 'string')
                setIsData(false)
            if (typeof (user) === 'object')
                setIsData(true)
        }
        getUser()
    }
    const { id, username, email, first_name, last_name } = user ? user : ''
    return (
        <>
            {
                token ? <div className="container w-75 pt-5 p-3">
                    <h1>Search User</h1>
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
                                <Button onClick={handleSearch}><RiUserSearchLine className='h4' /> Search</Button>
                            </Col>
                        </Row>
                        {
                            isData ? user &&
                                <Table striped bordered hover className="shadow">
                                    <thead>
                                        <tr className='text-center text-uppercase '>
                                            <th>#</th>
                                            <th>User Name</th>
                                            <th>email</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center">
                                            <td>{id}</td>
                                            <td>{username}</td>
                                            <td>{email}</td>
                                            <td>{first_name}</td>
                                            <td>{last_name}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                :
                                <h1>El usuario no existe</h1>
                        }
                    </Form>
                </div>
                    :
                    <InfoLogin />
            }
        </>
    )
}