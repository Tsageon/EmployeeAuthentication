import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/App2';  
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/forgotpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Form />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
