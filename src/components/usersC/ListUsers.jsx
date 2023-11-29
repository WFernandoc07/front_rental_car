import { Col, Table, Row, Button } from "react-bootstrap"
import { useAuth } from "../provider/userProviderLogin.jsx"
import { useEffect, useState } from "react"
import { ModalUser } from "./ModalUser.jsx"
import { InfoLogin} from "../basic/AvisoLogin.jsx"
import { LiaUserEditSolid } from "react-icons/lia"
import { AiOutlineUsergroupDelete } from "react-icons/ai"
import {useUsers} from '../../hooks/users/useUsers.js'
import { deleteUser } from "../../services/users.js"
import { ToastCustom } from "../basic/Toasts.jsx"
export default function ListUser() {
    const token = sessionStorage.getItem('tokenSesion')
    const { getUsers } = useAuth()
    const { data } = useUsers(token)
    getUsers(data)
    const [newUsers, setNewUsers] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [userId, setUserId] = useState()
    const [userData, setUserData] = useState({})
    const [isDelete, setIsDelete] = useState(false)


    useEffect(() => {
        setNewUsers(data)
        getUsers(data)
    }, [data, modalShow,])


    const modificar = (id) => {
        setModalShow(!modalShow)
        const userModificar = newUsers.find(user => user.id === id)
        setUserData(userModificar)
        setUserId(id)
    }
    const userDelete = (id) => {
        deleteUser (id)
        setIsDelete(!isDelete)
        const newUser = newUsers.filter(user => user.id !== id)
        setNewUsers(newUser)
        getUsers(newUser)
    }

    return (
        <>
            {
                isDelete && <div className='position-absolute botom-0 start-50 pt-4 m-auto'>
                    <ToastCustom
                        isActive={true}
                        info='User Deleted'
                        colorBg='success'
                    />
                </div>
            }
            {
                token ? <div className="container p-3 w-75">
                    <h1 className="text-center p-4">Lista</h1>
                    <Table striped bordered hover className="shadow">
                        <thead>
                            <tr className="text-center text-uppercase">
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newUsers && newUsers.map((user, index) => {
                                    const { username, email, first_name, last_name, id } = user;
                                    return <tr key={index} className="text-center">
                                        <td>{id}</td>
                                        <td>{first_name}</td>
                                        <td>{last_name}</td>
                                        <td>{email}</td>
                                        <td>{username}</td>
                                        <td>
                                            <Row>
                                                <Col><Button onClick={() => modificar(id)} className="border-0"><LiaUserEditSolid className="h5" /></Button></Col>
                                                <Col><Button onClick={() => userDelete(id)} className="bg-danger border-0"><AiOutlineUsergroupDelete className="h5" /></Button></Col>
                                            </Row>
                                        </td>
                                    </tr>
                                })
                            }

                            {modalShow && <ModalUser
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                id={userId}
                                data={userData}
                            />}

                        </tbody>
                    </Table>
                </div >
                    :
                    <InfoLogin />
            }
        </>
    )
}