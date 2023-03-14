import { ErrorMessage } from '@hookform/error-message';
import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

const Form = ({ listTransactions, setListTransactions, filterListTransactions, setFilterListTransactions }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();
  const [typeInput, setTypeInput] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm()

  const addItemList = (event, desc, value, input) => {
    event.preventDefault()
    setDescription('');
    setValue('');
    setTypeInput('');
    const newItem = {
      description: desc,
      type: input,
      value: input === 'entrada' ? parseInt(value) : parseInt(-value)
    }



    setListTransactions([...listTransactions, newItem]);
    setFilterListTransactions([...filterListTransactions, newItem]);
  }

  const handleClick = (data) => {
    console.log(data)
  }

  return (
    <form className="formMain" onSubmit={handleSubmit(handleClick)}>

      <div className="formDescription">
        <label htmlFor="desc">Descrição</label>
        <input {...register("description", { required: true })} />
        {errors.description && <p className='error-message'>Preenchimento obrigatório</p>}
        <span>Ex: Compra de Roupas</span>
      </div>

      <div className="formValueAndType">
        <div>
          <label htmlFor="">Valor</label>
          <input name='valor' {...register("value", {
            required: true,
            pattern: /^[0-9]+$/
          })} />
          {errors.value?.type === 'required' && <p className='error-message'>Preenchimento obrigatório</p>}
          {errors.value?.type === 'pattern' && <p className='error-message'>Digite somente números</p>}
        </div>

        <div>
          <label htmlFor="">Tipo de valor</label>
          <select id="select_options" placeholder='selecione'{...register('select_options')}>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
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