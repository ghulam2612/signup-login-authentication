import { Routes,Route } from 'react-router-dom';
import Signup from './Components/Property/Form/Signup/Signup';
import Login from './Components/Property/Form/Login/Login';
import Forgotpass from './Components/Property/Form/forgotPass/forgotpass';

function Path(){
    return(
        <>
        <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Forgotpass' element={<Forgotpass/>}/>
        </Routes>
        </>
    )
}

export default Path;