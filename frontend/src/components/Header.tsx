import './css-files/Header.css';
import {Container, Button} from 'react-bootstrap';

const Header = ({setShow}) => {

    const modalHandler = () => {
    }

    return (
        <div className="Header py-3">
            <Container className="d-flex justify-content-between">
                <h2>Appointment Reminder</h2>
                <Button variant="primary" on>Add Appointment</Button>
            </Container>
        </div>
    )
}

export default Header;