import './App.css';
import Header from './Components/Header/Headers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/SignUp/SignUp';
import { useState } from 'react';

function App() {
  const [AuthPageName, setAuthPageName] = useState("")

  return (
    <>
      <BrowserRouter>
        <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
        {AuthPageName !== "" ? <SignUp  AuthPageName={AuthPageName} setAuthPageName={setAuthPageName}  /> : null}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='/signin' element={<SignUp/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
