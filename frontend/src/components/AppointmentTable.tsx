import {Table} from 'react-bootstrap';

const AppointmentTable = () => {
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
            <tr>
              <td>1</td>
              <td>GI Visit</td>
              <td>Dr. Bob</td>
              <td>4-12-22</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Eye Doctor Visit</td>
              <td>Dr. Steve</td>
              <td>5-23-22</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ear Doctor</td>
              <td>Dr. Ear</td>
              <td>6-8-22</td>
            </tr>
          </tbody>
        </Table>
      </div>
        
    )
}

export default AppointmentTable;