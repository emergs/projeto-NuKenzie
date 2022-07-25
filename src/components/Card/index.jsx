import trash from '../../assets/trashDefault.svg';
import trash2 from '../../assets/trashHover.svg'
import './style.css';

const Card = (props)=>{
  
  return(
    <li key={props.index} className='liContentList'>
      <div className='liContentListMain'>
        <h3>{props.description}</h3>
        <div>
          <span>{props.value}</span>
          <figure>
             <img src={trash} alt='trash'/>
             <img src={trash2} alt="trashHover" />
          </figure>
        </div>
      </div>
      <div className='liContentListType'>
        <span>{props.type}</span>
      </div>
    </li>
  )  
}

export default Card;