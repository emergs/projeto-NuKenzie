import './style.css';

const TotalMoney = (listTransactions)=>{
  // const total = listTransactions.reduce((a,b)=>{
  //   return a + b
  // })

  return(
    <div className="totalMoney">
      <div className="totalMoneyValue">
        <h3 className='centerVert'>Valor Total:</h3>
        <span className='centerVert'>R$2000,00</span>
      </div>
      <div className="totalMoneyInfo">
        <span>Valor referente ao saldo</span>
      </div>
    </div>
  )
}

export default TotalMoney;