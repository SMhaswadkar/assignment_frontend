import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserListing from './components/UserListing';

import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {  
  return (    
    <BrowserRouter>      
        <Routes>
          <Route path="/" element={<UserListing />} />          
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
    </BrowserRouter>    
  );
}

export default App;
