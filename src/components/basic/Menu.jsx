import { Accordion } from 'react-bootstrap'
import { CiLogin, CiLogout, CiSearch, CiViewList } from "react-icons/ci"
import { LuUsers, LuUserSquare2, LuUserPlus } from "react-icons/lu"
import { RiUserSearchLine } from "react-icons/ri"
import { IoCarSport, IoCreateOutline } from "react-icons/io5"
import { MdLogin, MdOutlinePassword } from "react-icons/md"
import './menu.css'
import { Link } from 'react-router-dom'
export default function Menu() {
    return (
        <div className="w-100 h-100 text-white shadow-lg">
            <nav className="navbar position-relative h-100 navbar-expand-lg d-flex flex-column flex-a">
                <div className="container-fluid p-4">
                    <a className="navbar-brand text-center text-lg text-dark fw-bolder  w-100 p-2" href="/auth/login">
                        <img src="/logo.svg" width='150px' alt="Rent Car" />
                    </a>
                </div>
                <div className="container-fluid w-100 p-0">
                    <Accordion defaultActiveKey='0' className='w-100 m-auto'>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>
                                <Link to='auth/login' className='text-center w-100 text-uppercase fw-bolder nav-link fs-5'>Auth <MdLogin className='h4' /></Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navbar-nav d-flex flex-column w-100 text-center'>
                                    <Link to='/auth/login' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Login <CiLogin className='h3' /></Link>
                                    <Link to='/auth/resetpassword' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Reset Password <MdOutlinePassword className='h3'/></Link>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>
                                <Link className='text-center w-100 text-uppercase fw-bolder nav-link fs-5'>Users <LuUserSquare2 className='h3' />  </Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navbar-nav d-flex flex-column w-100 text-center'>
                                    <Link to='/users/list-user' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>List Users <LuUsers className='h4' /></Link>
                                    <Link to='/users/create-user' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Create User <LuUserPlus className='h4' /></Link>
                                    <Link to='/users/search-user/id' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Search User <RiUserSearchLine className='h4' /></Link>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>
                                <Link className='text-center w-100 text-uppercase fw-bolder nav-link fs-5'>Vehicles <IoCarSport className='h3' /></Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navbar-nav d-flex flex-column w-100 text-center'>
                                    <Link to='/vehicles/list-vehicle' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>List Vehicles <CiViewList className='h4' /></Link>
                                    <Link to='/vehicles/register-vehicle' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Register Vehicles <IoCreateOutline className='h4' /></Link>
                                    <Link to='/vehicles/search-vehicle' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Search Vehicle <CiSearch className='h4' /></Link>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>
                                <Link className='text-center w-100 text-uppercase fw-bolder nav-link fs-5'>Rents</Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navbar-nav d-flex flex-column w-100 text-center'>
                                    <Link to='/rents/list-rents' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Lists Rent <CiViewList className='h4' /></Link>
                                    <Link to='/rents/register-rent' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Register Rent <IoCreateOutline className='h4' /></Link>
                                    <Link to='/rents/search-rent' className='nav-item nav-link w-100 p-2 text-primary text-color fs-5'>Search Rents <CiSearch className='h4' /></Link>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='position-absolute bottom-0 start-0 w-100'>
                    <Link to='/auth/login' className='nav-item nav-link w-75 p-2 text-primary fw-bold text-color fs-5 text-center m-auto p-2' onClick={()=>sessionStorage.removeItem('tokenSesion')}>Logout <CiLogout /></Link>
                </div>
            </nav>
        </div>
    )
}