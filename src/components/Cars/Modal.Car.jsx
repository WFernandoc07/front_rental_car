import { Modal, Button } from 'react-bootstrap';
import { UpdateCar } from './UpdateCard';
import { FaCar } from "react-icons/fa"

export function ModalCard({ id, onHide, show, data }) {
    return (
        <Modal
            {...{ id, onHide, show, data }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update <FaCar/>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Info</h4>
                <UpdateCar data={data}></UpdateCar>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

