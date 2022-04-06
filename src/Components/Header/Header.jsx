import './Header.scss'

import { Link } from 'react-router-dom'

const Header= () =>{
    return(
        <div className="header">
            <div className="header__page">
                <h1 className='header__name'>Hi, I'm Muhammadislom</h1>
                <p className="header__text">
                   Frontend developer from Tashkent, Uzbekistan
                </p>
                <div className="header__list">
                   <div className="header__item">
                      <Link className='header__link' to="/about" >
                        About me
                      </Link>
                   </div>
                   <div className="header__items">
                      <Link className='header__links' to="/portfolio" >
                         Portfolio
                      </Link>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Header