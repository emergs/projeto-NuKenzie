import trash from './../../assets/trashDefault.svg';
import trash2 from './../../assets/trashHover.svg';
import { BsTrash } from 'react-icons/bs'
import './style.min.css';

const Card = ({ item, description, value, type, handleTransactions }) => {
  return (
    <li
      key={item.id}
      className={type === 'entrada' ? 'liContentList entrance' : 'liContentList expense'}
    >
      <div className='liContentListMain'>
        <h3>{description}</h3>
        <div>
          <span> R$ {Math.abs(value)}</span>
          <figure onClick={(event) => handleTransactions(item.id)}>
            <BsTrash />
          </figure>
        </div>
      </div>
      <div className='liContentListType'>
        <span>{type}</span>
      </div>
    </li>
  )
}

export default Card;