import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import AppointmentTable from './components/AppointmentTable';
import AppointmentModal from './components/AppointmentModal';
import UpdateModal from './components/UpdateModal'
import React from 'react';

function App() {
  //Use state boolean for toggling form modal
  const [show, setShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleUpdateClose = () => setUpdateShow(false);
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
      <Header show={show} setShow={setShow} />
      <AppointmentModal show={show} handleClose={handleClose} />
      <UpdateModal updateShow={updateShow} handleUpdateClose={handleUpdateClose} />
      <AppointmentTable setUpdateShow={setUpdateShow} updateShow={updateShow} apptList={apptList} />
    </div>
  );
}

export default App;
