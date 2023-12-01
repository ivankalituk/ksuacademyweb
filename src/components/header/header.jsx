import './header.scss'

import logo from "../../assets/photos/logo.svg"
import arrow from "../../assets/photos/arrowMP1.svg"
import burgerMenu from "../../assets/photos/burferMenu.svg"

import SearchBar from './components/searchBar/searchBar';
import Account from './components/account/account';
import HeaderSubject from './components/headerSubject/headerSubject';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header(){

    let [menuVisible, setMenuVisible] = useState(false)

    let handleBurger= () => {
        setMenuVisible(!menuVisible)
    }

    let [active, setActive] = useState(false)

    let handleClick = ()=>{
        setActive(!active)
    }

    let [subjects, setSubjects] = useState([]);

    let [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true)
        let res = await axios.get('http://localhost:1000/subject').then(({data}) => data).finally(setLoading(false))
        return res
      }

    useEffect(() => {
        fetchData().then((data) => setSubjects(data))
    }, []);


    return(
        <header>
            <div className="header_container">

                <Link className="header_logoGroup" to='/'>
                    <img src={logo} alt="logo" />
                    <span>ksu academy</span>
                </Link>

                <div className="header_searchCourses">
                    <SearchBar></SearchBar>

                    <div className="header_courses" onClick={handleClick}>
                        <span>Курси</span>
                        <img src={arrow} alt="Arrow" />
                    </div>
                </div>

                <Account></Account>

                <button className="burgerBtn">
                    <img src={burgerMenu} alt="burger" onClick={handleBurger}/>
                </button>
            </div>

            <div className={active? "header_courses_list" : "header_courses_list header_courses_listDisabled"}>
                    {
                        loading ? (
                            (null)
                        ) : (
                            subjects.map((item) => (
                                <HeaderSubject name = {item.name} key = {item.id} id = {item.subject_id}></HeaderSubject>
                            ))
                        )
                    }
            </div>

            <div className="header_burger">

            </div>
        </header>
    )
}

export default Header;