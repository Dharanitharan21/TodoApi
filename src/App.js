import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryApi from './Components/CategoryApi';
import ClientApi from './Components/ClientApi';
import EmployeeApi from './Components/EmployeeApi';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  return (
    <div className="App">
      {/* <CategoryApi/> */}
      {/* <ClientApi/> */}
      {/* <EmployeeApi/> */}

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CategoryApi/>}></Route>
        <Route path='/Category' element={<CategoryApi/>}></Route>
        <Route path='/Client' element={<ClientApi/>}></Route>
        <Route path='/Employee' element={<EmployeeApi/>}></Route>
        <Route path='/Employeeform' element={<EmployeeForm/>}></Route>
        <Route path='/Employeeform/:id' element={<EmployeeForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
