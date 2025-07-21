import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncComp2 from './components/FuncComp2';
import ClassComp from './components/ClassComp';
import ClassComp1 from './components/ClassComp1';
import ClassComp2 from './components/ClassComp2';
import FuncComp3 from './components/FuncComp3';
import FuncListMember from './components/FuncListMember';
import ClassMember from './components/ClassMember';
import StudentList from './components/StudentList';
import IStudent from './components/IStudent';

function App() {
  // biến đối tượng
  const objStudent = {
    name: "Hai Tran",
    age: 20,
    email: 'main@bcraft.id.vn'
  }
  
  const mockStudents: IStudent[] = [
  { id: 1, name: "Nguyễn Văn A", age: 20 },
  { id: 2, name: "Trần Thị B", age: 21 },
  { id: 3, name: "Lê Văn C", age: 23 },
  { id: 4, name: "Phạm Thị D", age: 19 },
];

  return (
    <div className="container h-100">
      <img src="https://bcraft.id.vn/images/Shmolo_noBG.webp" alt="Shmolo" />

      <div className='text-center alert alert-info'>
        <h1>Testing</h1>
      </div>
      <hr />

      <FuncComp2 />
      <FuncComp2 fullName="Hai Tran" age="20" email="main@bcraft.id.vn" />

      <FuncComp3 student = {objStudent} />
      <hr />
      
      <ClassComp studentName="Hai Tran"/>
      <ClassComp1 uName="Tran Hai" uAge={20} />
      <ClassComp2 student = {objStudent} />

      <FuncListMember />
      <hr />
      <ClassMember />
      <hr />
      <StudentList students={mockStudents} />
    </div>

    
  );
}

export default App;
