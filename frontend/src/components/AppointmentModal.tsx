import { Modal, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';

const FormModal = ({ show, handleClose }: any) => {

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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Appointment Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter appointment name" onChange={(e) => { setApptName(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Office</Form.Label>
            <Form.Control placeholder="Enter doctors office for visit" onChange={(e) => { setApptOffice(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder="Enter date of visit" onChange={(e) => { setApptDate(e.target.value) }} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitHandler}>
            Add Appointment
          </Button>


        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default FormModal;