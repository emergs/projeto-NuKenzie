import './style.min.css';
import imgNoCard from './../../assets/images-min/no-card.svg'

const ListNoCard = () => {
  return (
    <>
      <h3 className='h3NoCard'>Você ainda não possui nenhum lançamento</h3>
      <ul className="ulList">
        <li className='liContentList'><img src={imgNoCard} alt="" width={562} height={89} /></li>
        <li className='liContentList' ><img src={imgNoCard} alt="" width={562} height={89} /></li>
        <li className='liContentList' ><img src={imgNoCard} alt="" width={562} height={89} /></li>
      </ul>
    </>

  )
}

export default ListNoCard;