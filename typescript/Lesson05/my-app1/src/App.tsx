import React from 'react';
import './App.css';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';

function App() {
  return (
    <div className="container">
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
    </div>
  );
}

export default App;
