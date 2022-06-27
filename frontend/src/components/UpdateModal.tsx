import { Modal, Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ setUpdateShow, updateShow, handleUpdateClose, apptList, updateId }: any) => {

    const [apptName, setApptName] = useState("");
    const [apptOffice, setApptOffice] = useState("");
    const [apptDate, setApptDate] = useState("");

    console.log(apptName)

    const submitHandler = async () => {
        await axios.put(`/api/appointments/${updateId}`, {
            name: apptName,
            office: apptOffice,
            date: apptDate
        })
            .then((res) => {
                console.log(res);
            })
        
            window.location.reload()
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
                        <Form.Control onChange={(e) => { setApptName(e.target.value) }} placeholder="Enter appointment name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Office</Form.Label>
                        <Form.Control onChange={(e) => { setApptOffice(e.target.value) }} placeholder="Enter doctors office for visit" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control onChange={(e) => { setApptDate(e.target.value) }} placeholder="Enter date of visit" />
                    </Form.Group>

                    <Button onClick={submitHandler} variant="primary">
                        Update Appointment
                    </Button>


                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateModal;