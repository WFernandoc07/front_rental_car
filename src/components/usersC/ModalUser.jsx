import { Modal, Button } from 'react-bootstrap';
import { UpdateUser } from './UpdateUser';
import { FaUserCircle } from "react-icons/fa"

export function ModalUser({ id, onHide, show, data }) {
    return (
        <Modal
            {...{ id, onHide, show, data }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <FaUserCircle className='h1'/> {data.username}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Info</h4>
                <UpdateUser data={data}></UpdateUser>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

