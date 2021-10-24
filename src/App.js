import './App.css';
import Table from './components/table';
import { Button } from 'antd';
import { useState } from 'react';


function App() {
  const [isPracticing, setIsPracticing] = useState(false)
  return (
    <div className="App">
      <h1>Grrek Aplhabet</h1>
      <Table isPracticing={isPracticing}/>
      <Button onClick={() => setIsPracticing(!isPracticing)} type="primary">
        {isPracticing ? 'Practice' : 'View Table'}
      </Button>
    </div>
  );
}

export default App;
