import logo from '../assets/logo.svg'
import toggle from '../assets/toggle.svg'
import Navbar from './Navbar';

function Header(){
    return(

        <header className="header">
            <div className="header__brant">
                <img src={logo} alt="Flora Sheen Portfolio" className="header__logo" />
                <span className="header__title">Personal</span>
            </div>
                <button aria-label='Toggle Menu'>
                    <img src={toggle} alt="Hamburger Menu" className="header__toggle" />
                </button>
            <Navbar/>
                <button className='header__cta' aria-label='Download resume'>Resume</button>
        </header>
    )
}

export default Header;