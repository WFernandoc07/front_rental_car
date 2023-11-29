import { Form, FloatingLabel } from 'react-bootstrap';

export default function Input({ label, type, placeholder, valueState, action }) {
    const handleChange = (event) => {
        const newChange = event.target.value
        action(newChange)
    }
    return (<>
        <FloatingLabel
            controlId={`floating${type}`}
            label={label}
            className='mb-3'
        >
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={valueState}
                onChange={handleChange}
                required
            />
        </FloatingLabel>
    </>)
}