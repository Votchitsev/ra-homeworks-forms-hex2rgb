import './App.css';
import Form from './Form';
import { useRef } from 'react';

function App() {
  const app = useRef();

  return (
    <div className="App" ref={app}>
      <Form r={app}/>
    </div>
  );
}

export default App;
