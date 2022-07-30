import { useState } from 'react';
import './style.css';

const Form = ({listTransactions, setListTransactions, filterListTransactions, setFilterListTransactions})=>{
  const[description,setDescription] = useState('');
  const[value,setValue] = useState();
  const[typeInput,setTypeInput] = useState('');
  
  const addItemList = (event,desc,value,input) =>{
    event.preventDefault()
    setDescription('');
    setValue('');
    setTypeInput('');
    const newItem = {
      description: desc,
      type: input,
      value: input === 'entrada'? parseInt(value) : parseInt(-value)
    }
    
    setListTransactions([...listTransactions,newItem]);
    setFilterListTransactions([...filterListTransactions,newItem]);
  }

  return(
    <form action="" className="formMain">
      <div className="formDescription">
        <label htmlFor="">Descrição</label>
        <input required type="text" placeholder="Digite aqui sua descrição" value={description} onChange={(e)=> setDescription(e.target.value)} />
        <span>Ex: Compra de Roupas</span>
      </div>
      <div className="formValueAndType">
        <div>
          <label htmlFor="">Valor</label>
          <input type="number" value={value} onChange={(e)=> setValue(e.target.value)} required/> 
        </div>
        <div>
          <label htmlFor="">Tipo de valor</label>
          <select name="" id="" value={typeInput} onChange={(e)=> setTypeInput(e.target.value)} required>
            <option value=""></option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>
      <div className="formButton">
        <button type='button' onClick={(event) => addItemList(event,description,value,typeInput)}>Inserir valor</button>
      </div>
    </form>
  )
}

export default Form;