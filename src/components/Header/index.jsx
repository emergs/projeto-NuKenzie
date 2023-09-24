import imgLogo from '../../assets/images-min/nukenzie.svg'
import './style.min.css';

const Header = ({ setDashboard }) => {

  return (
    <div className="header centerVert">
      <div>
        <img src={imgLogo} alt="logo" width={123} height={20} />
        <button onClick={(oldDashboard) => setDashboard(false)}>Inicio</button>
      </div>
    </div>
  )
}

export default Header;