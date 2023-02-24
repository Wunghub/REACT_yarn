import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeptPage from './components/page/DeptPage';
import FireDeptPage from './components/page/FireDeptPage';
import EmpPage from './components/page/EmpPage';
import HomePage from './components/page/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage/>}/>
      <Route path='/dept/:id' exact={true} element={<FireDeptPage/>}/>
      <Route path='/emp/:id' exact={true} element={<EmpPage/>}/>
    </Routes>
    </>
  );
}

export default App;