import { useState } from 'react';
import './style.css';

const Form = (props)=>{
  const[description,setDescription] = useState('');
  const[value,setValue] = useState(1);
  const[typeInput,setTypeInput] = useState('')
  
  const addItemList = (event,desc,value,input) =>{
    event.preventDefault()
    const newItem = {
      description: desc,
      type: input,
      value: value,
    }
    console.log(input)
    props.setListTransactions([...props.listTransactions,newItem])
    console.log(props.listTransactions)
  }

  return(
    <form action="" className="formMain" onSubmit={(event) => addItemList(event,description,value,typeInput)}>
      <div className="formDescription">
        <label htmlFor="">Descrição</label>
        <input type="text" placeholder="Digite aqui sua descrição" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <span>Ex: Compra de Roupas</span>
      </div>
      <div className="formValueAndType">
        <div>
          <label htmlFor="">Valor</label>
          <input type="text" placeholder='1' value={value} onChange={(e)=> setValue(e.target.value)}/> 
        </div>
        <div>
          <label htmlFor="">Tipo de valor</label>
          <select name="" id="" value={typeInput} onChange={(e)=> setTypeInput(e.target.value)}>
            <option value=""></option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <div className="formButton">
        <button type='submit'>Inserir valor</button>
      </div>
    </form>
  )
}

export default Form;