import './Sidebar.scss'

import { Link } from 'react-router-dom'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar__page">
            <Link className='sidebar__name' to="/">
                MuhammadislomDev
            </Link>
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <Link className='sidebar__link' to="/" >
                        Home
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__link' to="/about" >
                      About
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__link' to="/portfolio" >
                        Portfolio
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__link' to="/setup" >
                        Setup
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar