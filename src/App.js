import './App.css';
import Header from './Components/Header/Headers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginAndRegister from './Pages/LoginAndRegister/LoginAndRegister';
import { useState } from 'react';
import CourseInstitute from './Pages/CourseInstitute/CourseInstitute';

function App() {
  const [AuthPageName, setAuthPageName] = useState("")

  return (
    <>
      <BrowserRouter>
        <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
        {AuthPageName !== "" ? <LoginAndRegister  AuthPageName={AuthPageName} setAuthPageName={setAuthPageName}  /> : null}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/course/:CoursePackagePK' element={<CourseInstitute/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
