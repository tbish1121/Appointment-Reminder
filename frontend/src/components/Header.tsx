import './css-files/Header.css';
import {Container, Button} from 'react-bootstrap';

const Header = ({setShow, show}: any) => {

    const modalHandler = () => {
        setShow(!show)
    }

    return (
        <div className="Header py-4 bg-dark text-white">
            <Container className="d-flex justify-content-between align-items-center">
                <h2>Appointment Reminder</h2>
                <Button variant="primary" onClick={modalHandler}>Add Appointment</Button>
            </Container>
        </div>
    )
}

export default Header;