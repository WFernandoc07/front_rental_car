import {Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io"
import { Button } from "react-bootstrap";
import { LuUserPlus } from "react-icons/lu";

export function InfoLogin() {
    return (
        <div className='w-100 h-100 bg-dark d-flex flex--column justify-content-center align-items-center'>
            <div className="d-grid gap-2 col-4 mx-auto">
                <p className="text-center text-light h1">Inicia Sesión</p>
                <Link to='/auth/login' className="w-100 d-block">
                    <button className="btn btn-primary w-100" type="button"><p className="h3">Login <IoIosLogIn /></p></button>
                </Link>
                <Link to='/users/create-user'>
                    <Button
                        variant='outline-light'
                        size='lg'
                        className='w-100'
                    >
                        Create User <LuUserPlus className='h4' />
                    </Button>
                </Link>
            </div>
        </div>
    )
}