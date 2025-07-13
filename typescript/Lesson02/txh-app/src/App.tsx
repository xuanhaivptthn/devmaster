import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';


function App() {
  return (
    <div className="container h-100">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BG art by はなとれい. You can check out the art <a href="https://www.pixiv.net/en/artworks/112501763">here</a>!
        </p>
        
      </header> */}

      <JsxExpression />
      {/* <FuncComp /> */}
      <FuncComp name="Hai Tran" company="Me" />
      
    </div>
  );
}

export default App;
