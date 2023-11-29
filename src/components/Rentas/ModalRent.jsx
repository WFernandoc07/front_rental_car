import { Modal, Button } from 'react-bootstrap';
import { UpdateRent } from './UpdateRent';

export function ModalRent({ id, onHide, show, data }) {
    return (
        <Modal
            {...{ id, onHide, show, data }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Rent
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateRent data={data}></UpdateRent>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

