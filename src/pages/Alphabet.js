import Table from '../components/table';
import { Button } from 'antd';
import { useState } from 'react';


function Alphabet() {
  const [isPracticing, setIsPracticing] = useState(false)
  return (
    <div>
      <h1>Grrek Aplhabet</h1>
      <Table isPracticing={isPracticing}/>
      <Button style={{marginBottom: '20px'}} onClick={() => setIsPracticing(!isPracticing)} type="primary">
        {isPracticing ? 'View Table' : 'Practice'}
      </Button>
    </div>
  );
}

export default Alphabet;
