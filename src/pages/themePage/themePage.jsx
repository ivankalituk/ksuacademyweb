import ThemeMenu from './components/themeMenu/themeMenu'
// import ChapterProgress from "../../components/chapterProgress/chapterProgress";
import FinalTest from "./components/finalTest/finalTest";

import './themePage.scss'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChaptrerPage(){

    let {id} = useParams()
    console.log(id)
    let [themes, setThemes] = useState([])
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(id)
    }, [id])
    
    return(
        <div className="chapterPage">
            {/* <ChapterProgress></ChapterProgress> */}

            <div className="content">
                <div className="content_container">
                    <ThemeMenu></ThemeMenu> 
                    <ThemeMenu></ThemeMenu>
                    <ThemeMenu></ThemeMenu>
                    
                    <FinalTest></FinalTest>
                </div>
            </div>
        </div>
    )
}

export default ChaptrerPage;