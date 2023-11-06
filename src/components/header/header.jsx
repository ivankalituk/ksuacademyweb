import './header.scss'

import logo from "../../assets/photos/logo.svg"
import arrow from "../../assets/photos/arrowMP1.svg"
import burgerMenu from "../../assets/photos/burferMenu.svg"

import SearchBar from './components/searchBar/searchBar';
import Account from './components/account/account';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className="header_container">

                <Link className="header_logoGroup" to='/'>
                    <img src={logo} alt="logo" />
                    <span>ksu academy</span>
                </Link>

                <div className="header_searchCourses">
                    <SearchBar></SearchBar>

                    <div className="header_courses">
                        <span>Курси</span>
                        <img src={arrow} alt="Arrow" />
                    </div>
                </div>

                <Account></Account>

                <button className="burgerBtn">
                    <img src={burgerMenu} alt="burger" />
                </button>
            </div>
        </header>
    )
}

export default Header;