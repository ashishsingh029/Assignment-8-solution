import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className = 'navbar navbar-expand-lg bg-body-tertiary'>
            <div className = 'container-fluid'>
                <Link className = 'navbar-brand' to = "/three">
                    Assignment-8
                </Link>
                <div className = 'collapse navbar-collapse' id = 'navbarNav'>
                    <ul className = 'navbar-nav'>
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to= '/' >
                                One
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to= '/two' >
                                Two
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to= '/three' >
                                Three
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to= '/four' >
                                Four
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to = '/five'>
                                Five
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar