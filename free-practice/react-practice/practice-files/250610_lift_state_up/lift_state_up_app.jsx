import { useState } from 'react';
import InputA from './inputA';
import InputB from './inputB';

function LiftStateUpSyncInputApp() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>상태 끌어올리기 예제</h2>
      <InputA value={text} onChange={handleChange} />
      <InputB value={text} onChange={handleChange} />
      <p>현재 입력된 값:{text}</p>
    </div>
  );
}

export default LiftStateUpSyncInputApp;
