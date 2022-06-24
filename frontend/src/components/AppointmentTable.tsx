import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import './css-files/AppointmentTable.css';

const AppointmentTable = ({ apptList, setUpdateShow, updateShow }: any) => {

  //Function for deleting appt
  const deleteHandler = (prop: string) => (event: any) => {
    axios.delete(`/api/appointments/${prop}`);
    window.location.reload()
  }

  const modalHandler = () => {
    setUpdateShow(!updateShow)
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
                <Button className="mx-1" onClick={deleteHandler(appt.id)}>Delete</Button>

                <Button className="mx-1" onClick={modalHandler}>Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  )
}

export default AppointmentTable;