import Card from "../Card";
import './style.css';

const List = ({listTransactions,handleTransactions}) =>{
  return(
    <ul className="ulList">
      {
        listTransactions.map((item,index)=>{
          return <Card key={index} item={item} description={item.description} type={item.type} value={item.value} handleTransactions={handleTransactions}></Card>
        })
      }
    </ul>
  )
}

export default List;