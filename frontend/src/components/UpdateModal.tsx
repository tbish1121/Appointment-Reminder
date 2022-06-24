import { Modal, Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ setUpdateShow, updateShow, handleUpdateClose }: any) => {

    const [apptName, setApptName] = useState("");
    const [apptOffice, setApptOffice] = useState("");
    const [apptDate, setApptDate] = useState("");

    console.log(apptName)

    const submitHandler = async () => {
        await axios.post('/api/appointments', {
            name: apptName,
            office: apptOffice,
            date: apptDate
        })
            .then((res) => {
                console.log(res);
            })
    }

    return (
        <Modal show={updateShow} onHide={handleUpdateClose}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Appointment Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter appointment name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Office</Form.Label>
                        <Form.Control placeholder="Enter doctors office for visit" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder="Enter date of visit" />
                    </Form.Group>

                    <Button variant="primary">
                        Update Appointment
                    </Button>


                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateModal;