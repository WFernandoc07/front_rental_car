import { useState } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';

export function ToastCustom({ isActive, info, colorBg }) {
    const [show, setShow] = useState(isActive);
    return (
        <Row>
            <Col xs={6}>
                <Toast bg={colorBg} className='text-white text-center' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>{info}</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}
