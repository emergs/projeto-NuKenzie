import Card from "../Card";
import './style.css';

const List = ({listTransactions}) =>{
  return(
    <ul className="ulList">
      {
        listTransactions.map((item,index)=>{
          return <Card key={index} description={item.description} type={item.type} value={item.value}></Card>
        })
      }
    </ul>
  )
}

export default List;