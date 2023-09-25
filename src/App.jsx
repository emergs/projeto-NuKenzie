import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import FilterButtons from './components/FilterButtons';
import ListNoCard from './components/ListNoCard';
import imgLogo from './assets/images-min/nukenzie-white.svg';
import imgMain from './assets/images-min/image.svg';
import './style/App.min.css';
import './style/reset.min.css';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [filterListTransactions, setFilterListTransactions] = useState(listTransactions)
  const [dashboard, setDashboard] = useState(false)

  const handleTransactions = (id) => {
    const itensNotRemoved = listTransactions.filter((elem) => {
      return elem.id !== id
    })
    setListTransactions(itensNotRemoved);
    setFilterListTransactions(itensNotRemoved);
  }

  const filterInputs = () => {
    console.log(listTransactions);
    const filters = listTransactions.filter((elem) => {
      return elem.type === 'entrada'
    })
    setFilterListTransactions(filters)
  }

  const filterExpense = () => {
    console.log('expense ok');
    const filters = listTransactions.filter((elem) => {
      return elem.type === 'despesa'
    })
    setFilterListTransactions(filters)
  }

  const AllTransactions = () => {
    setFilterListTransactions(listTransactions)
  }

  const totalValue = filterListTransactions.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.value
  }, 0)

  return (
    dashboard === false ?
      <div className="AppIndex">
        <div className="divContent">
          <div className='divInfo'>
            <img src={imgLogo} alt="" width={123} height={20} />
            <h1>Centralize o controle das suas finanças</h1>
            <span>de forma rápida e segura</span>
            <button onClick={() => setDashboard(true)}>Iniciar</button>
          </div>

          <div className="imgMain">
            <img src={imgMain} alt="" width={593} height={593} />
          </div>
        </div>
      </div>
      :
      <div className="App">
        <Header setDashboard={setDashboard} />
        <div className="bodyApp">
          <div className="columnInputs">
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions} filterListTransactions={filterListTransactions} setFilterListTransactions={setFilterListTransactions} />
            <TotalMoney listTransactions={listTransactions} totalValue={totalValue} />
          </div>

          <div className="columnList">
            <FilterButtons AllTransactions={AllTransactions} filterInputs={filterInputs} filterExpense={filterExpense} />

            {
              listTransactions.length < 1 ?
                <ListNoCard />
                :
                <List listTransactions={filterListTransactions} handleTransactions={handleTransactions} />
            }

          </div>
        </div>
      </div>
  );
}

export default App;
