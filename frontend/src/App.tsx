import {useState, useEffect} from 'react';
import {Table, Modal, Button, Form} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import AppointmentTable from './components/AppointmentTable';
import axios from 'axios';

function App() {

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [apptList, setApptList] = useState([] as any);

  useEffect(() => {
    axios.get('/api/appointments')
      .then((res) => {
        for(let i = 0; i < res.data.length; i++) {
          setApptList((appts: any) => [...appts, res.data[i]])
        }
      })
  }, [])

  console.log(apptList)

  return (
    <div className="App">
      <Header setShow={setShow} show={show}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Appointment Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Appointment Name</Form.Label>
            <Form.Control placeholder="Enter appointment name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Doctors Office</Form.Label>
            <Form.Control placeholder="Enter doctors office for visit" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder="Enter date of visit" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Add Appointment
          </Button>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <AppointmentTable />
    </div>
  );
}

export default App;
