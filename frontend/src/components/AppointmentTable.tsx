import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import './css-files/AppointmentTable.css';

const AppointmentTable = ({apptList}: any) => {

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
            {apptList.map((appt:any) => (
              <tr>
                <td>{appt.name}</td>
                <td>{appt.office}</td>
                <td>{appt.date}</td>
                <td className="d-flex justify-content-center"><Button onClick={(e) => {
                  axios.delete(`/api/appointments/${appt.id}`);
                  window.location.reload()
                }}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
        
    )
}

export default AppointmentTable;