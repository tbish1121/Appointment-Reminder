import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import AppointmentTable from './components/AppointmentTable';
import FormModal from './components/FormModal';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [apptList, setApptList] = useState([] as any);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await axios('/api/appointments');
      setApptList(res.data);
    }
    fetchAppointments();
  }, [])

  return (
    <div className="App">
      <Header setShow={setShow}/>
      <FormModal show={show}  handleClose={handleClose}/>
      <AppointmentTable apptList={apptList}/>
    </div>
  );
}

export default App;
