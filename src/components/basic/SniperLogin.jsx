import { Spinner } from "react-bootstrap"
export function SniperLogin() {
    return (
        <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}