import { useState } from 'react';
//import './style/reset.css';
import './style/App.css';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import FilterButtons from './components/FilterButtons';

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
])

  return (
    <div className="App">
      <Header></Header>
      <div className="columnInputs">
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions}></Form>
        <TotalMoney state={listTransactions}></TotalMoney>
      </div>
      <div className="columnList">
        <FilterButtons></FilterButtons>
        <List listTransactions={listTransactions}></List>
      </div>
    </div>
  );
}

export default App;
