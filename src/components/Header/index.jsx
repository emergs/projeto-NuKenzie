import imgLogo from '../../assets/nukenzie.svg'
import './style.css';

const Header = ({setDashboard})=>{

  return(
    <div className="header centerVert">
      <div>
        <img src={imgLogo} alt="logo" />
        <button onClick={(oldDashboard)=>setDashboard(false)}>Inicio</button>
      </div>
    </div>
  )
}

export default Header;