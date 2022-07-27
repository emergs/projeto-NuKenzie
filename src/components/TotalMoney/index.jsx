import { useState } from 'react';
import './style.css';

const TotalMoney = (props)=>{
  console.log(props.totalValue)
  return(
    <div className="totalMoney">
      <div className="totalMoneyValue">
        <h3 className='centerVert'>Valor Total:</h3>
        <span className='centerVert'>R$ {props.totalValue}</span>
      </div>
      <div className="totalMoneyInfo">
        <span>Valor referente ao saldo</span>
      </div>
    </div>
  )
}

export default TotalMoney;