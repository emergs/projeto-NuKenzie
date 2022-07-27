import { useState } from 'react';
import './style.css';

const FilterButtons = (props)=>{
  return(
    <div className="filterSideBar centerVert">
      <div>
        <h3>Resumo Financeiro</h3>
      </div>
      <div>
        <button className="filterSideBarAll centerVert" onClick={()=>props.AllTransactions()}>Todos</button>
        <button className="filterSideBarInput centerVert" onClick={()=>props.filterInputs()}>Entradas</button>
        <button className="filterSideBarExpense centerVert" onClick={()=>props.filterExpense()}>Despesas</button>
      </div>
    </div>
  )
}

export default FilterButtons;