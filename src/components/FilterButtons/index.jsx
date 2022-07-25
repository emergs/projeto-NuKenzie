import './style.css';

const FilterButtons = ()=>{
  return(
    <div className="filterSideBar centerVert">
      <div>
        <h3>Resumo Financeiro</h3>
      </div>
      <div>
        <button className="filterSideBarAll centerVert">Todos</button>
        <button className="filterSideBarInput centerVert">Entradas</button>
        <button className="filterSideBarExpense centerVert">Despesas</button>
      </div>
    </div>
  )
}

export default FilterButtons;