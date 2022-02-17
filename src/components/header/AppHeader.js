import { Link } from 'react-router-dom';
import marvelLogo from './MarvelLogo.jpg'

import './appheader.scss';

const AppHeader = () => {
    return(
        <>
            <header className="appheader">
                <nav className="appheader__menu container">
                    <ul>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><img src={marvelLogo} alt="marvelLogo"/></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/games">Games</Link></li>
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