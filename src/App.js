import './App.css';
import Deletdata from './component/Deletdata';
import Adddata from './component/Adddata';
import Editdta from './component/Editdta';
import Crud from './component/Crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Crud/>}></Route>
       <Route path='add-data' element={<Adddata/>}></Route>
       <Route path="/edit-data/:id" element={<Editdta/>}></Route>
       <Route path='delet-data' element={<Deletdata/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
