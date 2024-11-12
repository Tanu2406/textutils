import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode,setmode]=useState('light');//whether dark mode is enable or not 
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
    
  }
  // const removeBodyclasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
    
  // }
  
  // const toggleMode = (cls)=>{
    const toggleMode = ()=>{
    // removeBodyclasses();
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#0e284e';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode'.;
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
  <>
 {/* <Router>
   <Navbar title="TextUtiles" aboutText="About Us"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}  />
          </Route>
    </Switch>
   
   </div>
  </Router> */}
   <Navbar title="TextUtiles" aboutText="About Us"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3"></div>
   <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}  />
   <About mode={mode}/>
  </>

  );
}

export default App;
