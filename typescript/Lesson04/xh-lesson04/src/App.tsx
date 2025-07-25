import React from 'react';
import './App.css';
import IStudent from './components/IStudent';
import FuncListStudents from './components/FuncListStudents';

function App() {
  const students: IStudent[] = [
    { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nữ", address: "Hà Nội", email: "example1@gmail.com", phone: "2343324759", state: "Available" },
    { id: 2, name: "Nguyễn Văn B", age: 22, gender: "Nam", address: "Hà Nam", email: "example2@gmail.com", phone: "2343264759", state: "Available" },
    { id: 3, name: "Nguyễn Văn C", age: 24, gender: "Nam", address: "Thái Nguyên", email: "example3@gmail.com", phone: "2353224759", state: "Left" },
    { id: 4, name: "Nguyễn Văn D", age: 20, gender: "Nữ", address: "Hồ Chí Minh", email: "example4@gmail.com", phone: "23433744759", state: "Available" },
    { id: 5, name: "Nguyễn Văn E", age: 28, gender: "Nam", address: "Hà Nội", email: "example5@gmail.com", phone: "234374559", state: "Available" }
  ];

  return (
    <div className='container border'>
      <div>
        <img src="https://bcraft.id.vn/images/Shmolo_noBG.webp" alt="Shmolo" />
        <hr />

        <FuncListStudents students={students} />
      </div>
    </div>
  );
}

export default App;
