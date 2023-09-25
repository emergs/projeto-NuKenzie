import trash from '../../assets/images-min/trashDefault.svg';
import trash2 from '../../assets/images-min/trashHover.svg';
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
          <span>{Math.abs(value)}</span>
          <figure onClick={(event) => handleTransactions(item.id)}>
            <img src={trash} alt='trash' />
            <img src={trash2} alt="trashHover" />
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