import React from 'react';
import logo from './logo.svg';
import './App.css';
import IEmployee from './components/IEmployee';
import ListEmployee from './components/ListEmployee';

function App() {
  const mockEmployees: IEmployee[] = [
  {empID: 1, empName: "Hai Tran 1", empSalary: 2000000, empStatus: "Employed"},
  {empID: 2, empName: "Hai Tran 2", empSalary: 3000000, empStatus: "Left"},
  {empID: 3, empName: "Hai Tran 3", empSalary: 4000000, empStatus: "Employed"},
  {empID: 4, empName: "Hai Tran 4", empSalary: 5000000, empStatus: "Employed"},
  {empID: 5, empName: "Hai Tran 5", empSalary: 6000000, empStatus: "Employed"},
  {empID: 6, empName: "Hai Tran 6", empSalary: 7000000, empStatus: "Employed"},
]

  return (
    <div className='container h-100'>
      <img src="https://bcraft.id.vn/images/Shmolo_noBG.webp" alt="Shmolo" />
      <hr />
      <ListEmployee employees={mockEmployees}></ListEmployee>
    </div>
  );
}

export default App;
