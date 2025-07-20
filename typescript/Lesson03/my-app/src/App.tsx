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

function App() {
  // biến đối tượng
  const objStudent = {
    name: "Hai Tran",
    age: 20,
    email: 'main@bcraft.id.vn'
  }

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
    </div>

    
  );
}

export default App;
