import '../stylesheets/headers.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

import useWindowDimensions from '../utility/getWindowDimensions'
import { logo } from './../resources/images'

const Navbar = (props) => {
    // const [dropDownActive, setDropDownActive] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);
    const [notTop, setNotTop] = useState(false);

    window.onscroll = function () { shrinkHeader() }
    function shrinkHeader() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setNotTop(true);
        } else {
            setNotTop(false);
        }
    }

    const { width } = useWindowDimensions();

    return (
        <>
            <header className={notTop ? 'notTop' : ''} data-head="top">
                <Link onClick={() => {props.setPageID(1)}} to='/' className='logo'>
                    <img src={logo} alt="NSDC" title='NSDC' />
                </Link>

                <ul className={`navbar h-nav o-nav ${(width < 995 && !navbarActive) ? 'hide' : ''}`}>
                    <li className={props.onPage === 1 ? 'activePage' : ''}><Link onClick={() => {props.setPageID(1)}} to="/">Home</Link></li>
                    <li className={props.onPage === 2 ? 'activePage' : ''}><Link onClick={() => {props.setPageID(2)}} to="/products">Products</Link></li>
                    {/* <li
                        onMouseEnter={() => setDropDownActive(true)}
                        onMouseLeave={() => setDropDownActive(false)}
                        onClick={() => { setDropDownActive(!dropDownActive) }}
                        className={`dropdown-button${props.onPage === 4 ? ' activePage' : ''}`}
                    >
                        <span className="dropdown">
                            Events
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <ul className={`dropdown-menu${dropDownActive ? '' : ' hide'}`}>
                            <li className="dropdown-item">
                                <a href='/'><p className='dropdown-item-text'>Event 1 &gt;</p></a>
                            </li>
                            <li className="dropdown-item">
                                <a href='/'><p className='dropdown-item-text'>Event 2 &gt;</p></a>
                            </li>
                            <li className="dropdown-item">
                                <a href='/'><p className='dropdown-item-text'>Event 3 &gt;</p></a>
                            </li>
                        </ul>
                    </li> */}
                    <li className={props.onPage === 3 ? 'activePage' : ''}><a href="/">About</a></li>
                    <li className={props.onPage === 4 ? 'activePage' : ''}>
                        <Link to="/login">
                            <div className="login-button button">
                                Log In
                            </div>
                        </Link>
                    </li>
                    <li className={props.onPage === 7 ? 'activePage' : ''}>
                        <div className="signup-button button">
                        <a href="/">Sign Up</a>
                        </div>
                    </li>
                </ul>

                <div
                    className={`hamburger${width >= 995 ? ' hide' : ''}`}
                    onClick={() => setNavbarActive(!navbarActive)}
                >
                    <FontAwesomeIcon icon={navbarActive ? faX : faBars} />
                </div>
            </header>
            <div className="header-spacing"></div>
        </>
    )
}

export default Navbar