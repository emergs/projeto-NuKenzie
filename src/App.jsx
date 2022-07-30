import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import FilterButtons from './components/FilterButtons';
import './style/App.css';
import imgLogo from './assets/nukenzie-white.svg';
import imgMain from './assets/image.svg';

function App() {
  const [listTransactions, setListTransactions] = useState([])

  const [filterListTransactions, setFilterListTransactions] = useState(listTransactions)

  const [dashboard, setDashboard] = useState(false)

  const handleTransactions = (item) => {
    console.log(item)
    const itensNotRemoved = listTransactions.filter((elem)=> {
      return elem.description !== item
    })
    setListTransactions(itensNotRemoved);
    setFilterListTransactions(itensNotRemoved);
  }

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

  const totalValue = filterListTransactions.reduce((valorAnterior,valorAtual)=>{
    return valorAnterior + valorAtual.value
  },0)

  return (
    dashboard === false ?
    <div className="AppIndex">
      <div className="divContent">
        <div className='divInfo'>
          <img src={imgLogo} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <button onClick={()=>setDashboard(true)}>Iniciar</button>
        </div>

        <div className="imgMain">
          <img src={imgMain} alt="" />
        </div>
      </div>
    </div>
    :
    <div className="App">
      <Header setDashboard={setDashboard}></Header>
      <div className="bodyApp">
        <div className="columnInputs">
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} filterListTransactions={filterListTransactions} setFilterListTransactions={setFilterListTransactions}/>
          <TotalMoney listTransactions={listTransactions} totalValue={totalValue}></TotalMoney>
        </div>
        <div className="columnList">
          <FilterButtons AllTransactions={AllTransactions} filterInputs={filterInputs} filterExpense={filterExpense}/>
          <List listTransactions={filterListTransactions} handleTransactions={handleTransactions}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
