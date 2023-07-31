import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({});

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({})
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled.", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled.", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} >
              {/* <About mode={mode} /> */}
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} />} >
              {/* <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} /> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
