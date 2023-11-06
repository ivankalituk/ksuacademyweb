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

    // async function fetchData() {
    //     setLoading(true)
    //     let res = await axios.get('http://localhost:1000/theme', {params: {chapter_id: chapter_id}}).then(({data}) => data).finally(setLoading(false))
    //     return res
    //   }

    // useEffect( () => {
    //     fetchData().then((data) => setThemes(data))

    // }, [])

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