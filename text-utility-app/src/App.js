import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'; 
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 900);

  };


  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode activated","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated","success"); 
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}>
              </Route>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Utility" mode={mode}/>}>
              </Route>
          </Routes>
     </div>
    </Router>
      
    </>
  );
}

export default App;
