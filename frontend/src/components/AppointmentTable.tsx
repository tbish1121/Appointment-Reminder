import {Table} from 'react-bootstrap';

const AppointmentTable = ({apptList}: any) => {
    return (
      <div className="d-flex justify-content-center mt-5 pt-3">
        <Table striped bordered hover className="w-75">
          <thead>
            <tr>
              <th>#</th>
              <th>Appointment Name</th>
              <th>Doctors Office</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {apptList.map((appt:any) => (
              <tr>
                <td>{appt.id}</td>
                <td>{appt.name}</td>
                <td>{appt.office}</td>
                <td>{appt.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
        
    )
}

export default AppointmentTable;