import Card from "../Card";
import './style.css';

const List = ({ listTransactions, handleTransactions }) => {
  console.log(listTransactions);
  return (
    <ul className="ulList">
      {
        listTransactions.map((item) => {
          return <Card key={item.id} item={item} description={item.description} type={item.type} value={item.value} handleTransactions={handleTransactions}></Card>
        })
      }
    </ul>
  )
}

export default List;