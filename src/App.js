
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, { useState } from 'react'



function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
       message:message,
       type:type
     })
     setTimeout(()=>{
       setAlert(null);
     },1800);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#045445';
      showAlert("Dark Mode was enabled.","Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='#d0e5e2';
      showAlert("Light Mode was enabled.","Success");
    }
  }
  
  return (
    <>
     <Navbar title="textPlay" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;


