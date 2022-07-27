import imgLogo from '../../assets/nukenzie.svg'
import './style.css';

const Header = ()=>{

  return(
    <div className="header centerVert">
      <div>
        <img src={imgLogo} alt="logo" />
        <button>Inicio</button>
      </div>
    </div>
  )
}

export default Header;