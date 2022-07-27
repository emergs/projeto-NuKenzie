import { useState } from 'react';
import './style/App.css';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import FilterButtons from './components/FilterButtons';

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "despesa", value: -150 }
  ])

  const [filterListTransactions, setFilterListTransactions] = useState(listTransactions)

  const filterInputs = ()=>{
      const filters = listTransactions.filter((elem)=>{
        return elem.type === 'entrada'
      })
      setFilterListTransactions(filters)
      console.log(filters)
    }
  
  const filterExpense = ()=>{
    const filters = listTransactions.filter((elem)=>{
      return elem.type === 'despesa'
    })
    setFilterListTransactions(filters)
    console.log(filters)
  }
  
  const AllTransactions = ()=>{
     setFilterListTransactions(listTransactions)
  }

  console.log(listTransactions)
  const totalValue = filterListTransactions.reduce((valorAnterior,valorAtual)=>{
    return valorAnterior + valorAtual.value
  },0)

  return (
    <div className="App">
      <Header></Header>
      <div className="bodyApp">
        <div className="columnInputs">
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} filterListTransactions={filterListTransactions} setFilterListTransactions={setFilterListTransactions}/>
          <TotalMoney listTransactions={listTransactions} totalValue={totalValue}></TotalMoney>
        </div>
        <div className="columnList">
          <FilterButtons AllTransactions={AllTransactions} filterInputs={filterInputs} filterExpense={filterExpense}/>
          <List listTransactions={filterListTransactions}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
