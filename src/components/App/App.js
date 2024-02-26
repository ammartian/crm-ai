import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import Edit from '../Body/FriendList/Edit/Edit';


function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
