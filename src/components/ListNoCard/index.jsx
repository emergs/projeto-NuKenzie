import './style.css';
import imgNoCard from './../../assets/no-card.svg'

const ListNoCard = ()=>{
  return(
    <>
      <h3 className='h3NoCard'>Você ainda não possui nenhum lançamento</h3>
      <ul className="ulList">
        <li className='liContentList'><img src={imgNoCard} alt="" /></li>
        <li className='liContentList' ><img src={imgNoCard} alt="" /></li>
        <li className='liContentList' ><img src={imgNoCard} alt="" /></li>
      </ul>
    </>
    
  )
}

export default ListNoCard;