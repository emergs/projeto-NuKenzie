import imgLogo from '../../assets/nukenzie.svg'

const Header = ()=>{

  return(
    <div className="header centerVert">
      <img src={imgLogo} alt="logo" />
      <button>Inicio</button>
    </div>
  )
}

export default Header;