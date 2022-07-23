import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
])

  return (
    <div className="App">
      <Form state={listTransactions} setState={setListTransactions}></Form>
    </div>
  );
}

export default App;
