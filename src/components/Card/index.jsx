import trash from '../../assets/trashDefault.svg';
import trash2 from '../../assets/trashHover.svg'
import './style.css';

const Card = ({index,item,description,value,type,handleTransactions})=>{
  return(
    <li 
      key={index} 
      className = {type === 'entrada'? 'liContentList entrance' : 'liContentList expense'}
    >
      <div className='liContentListMain'>
        <h3>{description}</h3>
        <div>
          <span>{value}</span>
          <figure onClick={(event)=>handleTransactions(item.description)}>
             <img src={trash} alt='trash'/>
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