import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import './css-files/AppointmentTable.css';
import {useState} from 'react';

const AppointmentTable = ({ apptList, setUpdateShow, updateShow, setUpdateId }: any) => {
  
  


  //Function for deleting appt
  const deleteHandler = (prop: string) => (event: any) => {
    axios.delete(`/api/appointments/${prop}`);
    window.location.reload()
  }

  const modalHandler = (prop: string) => (event: any) => {
    setUpdateShow(!updateShow);
    setUpdateId(prop);
  }

  return (
    <div className="d-flex justify-content-center mt-5 pt-3">
      <Table striped bordered hover className="w-75">
        <thead>
          <tr>
            <th>Appointment Name</th>
            <th>Doctors Office</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {apptList.map((appt: any) => (
            <tr>
              <td>{appt.name}</td>
              <td>{appt.office}</td>
              <td>{appt.date}</td>
              <td className="d-flex justify-content-center">
                <Button className="mx-1" onClick={modalHandler(appt.id)}>Update</Button>
                <Button variant="danger" className="mx-1" onClick={deleteHandler(appt.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  )
}

export default AppointmentTable;