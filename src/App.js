import Signup from './Components/Property/Form/Signup/Signup';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Property/Form/Login/Login';
import Forgotpass from './Components/Property/Form/forgotPass/forgotpass';
import Path from './route';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Forgotpass' element={<Forgotpass/>}/>
      </Routes>
      <Signup/>
    </div>
  );
}
export default App;
