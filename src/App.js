import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert'; // Import the Alert component
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {  // Corrected 'ligt' to 'light'
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Textutils - Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Textutils install now';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Textutils - Light Mode';
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} /> {/* Use the Alert component */}
        <div className='container my-3'>
          {/* <Routes> Use Routes instead of Switch */}
            {/* <Route path="/about" element={<About />} /> Update Route component
            <Route path="/" element={ */}
            <TextForms heading="Enter the text to analyze below" />
            {/* // } /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
