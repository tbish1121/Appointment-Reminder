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
  //Use state boolean for toggling update modal
  const [updateShow, setUpdateShow] = useState(false);
  //Use state array for storing ID of appointment for opening update modal
  const [updateId, setUpdateId] = useState("");
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
      <UpdateModal updateId={updateId} apptList={apptList} updateShow={updateShow} handleUpdateClose={handleUpdateClose} />
      <AppointmentTable setUpdateId={setUpdateId} setUpdateShow={setUpdateShow} updateShow={updateShow} apptList={apptList} />
    </div>
  );
}

export default App;
