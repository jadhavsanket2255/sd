import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {createBrowserHistory} from "history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";

const history = createBrowserHistory();

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =  (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
        setAlert(null);
  }, 3000)

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark Mode has been activated!","success")
      //document.title = "TextUtils Dark Mode"
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
       showAlert("light Mode has been activated!", "success")
      // setInterval(() => {
      //   document.title = "TextUtils App Activated "
      // }, 2000);
    }
  } 

  const multiColorMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'red';
    }
  }

  return (
    <>
    <Router>
      <Navbar/>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <TextForm showAlert={showAlert} title='Write Text'  mode={mode}/>  
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
