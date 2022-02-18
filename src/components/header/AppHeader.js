import { NavLink } from 'react-router-dom';
import marvelLogo from './MarvelLogo.jpg'

import './appheader.scss';

const AppHeader = () => {
    return(
        <>
            <header className="appheader">
                <nav className="appheader__menu container">
                    <ul>
                        <li><NavLink to="/" style={{color:'#ffff', textDecoration: 'none', fontWeight: 'bold'}}>About us</NavLink></li>
                        <li><NavLink to="/characters" style={{color:'#ffff', textDecoration: 'none', fontWeight: 'bold'}}>Characters</NavLink></li>
                        <li><img src={marvelLogo} alt="marvelLogo" className='appheader__img'/></li>
                        <li><NavLink to="/store" style={{color:'#ffff', textDecoration: 'none', fontWeight: 'bold'}}>Store</NavLink></li>
                        <li><NavLink to="/games" style={{color:'#ffff', textDecoration: 'none', fontWeight: 'bold'}}>Games</NavLink></li>
                    </ul>
                </nav>
            </header>
            <footer>
                <div className='footer'></div>
            </footer>
        </>
    )
}

export default AppHeader;