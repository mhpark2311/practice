import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const name = '챗GPT';

  return (
    <div className="wrapper">
      <h1>안녕하세요, {name}님!</h1>
      <p>{new Date().toLocaleDateString()}</p>

      <ul>
        {['HTML', 'CSS', 'JSX'].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button onClick={() => alert('눌렀어요!')}>클릭</button>
    </div>
  );
}

export default App;
