import ThemeDevMenu from "./components/themeMenu/themeDevMenu";
import FinalTest from "./components/finalTest/finalTest";

import './themeDevelopmentPage.scss'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ThemeDevelopmentPage(){
 
    let {idt} = useParams()

    //получение тем
    let [themeLoading, setThemeLoading] = useState(false)
    let [themes, setThemes] = useState([])

    async function fetchTheme() {
        setThemeLoading(true)
        console.log(idt)
        let res = await axios.get('http://localhost:1000/theme', {params: {chapter_id: idt}}).then(({data}) => data).finally(setThemeLoading(false))
        return res
    }

    useEffect(() => {
        fetchTheme().then((data) => setThemes(data))
    }, [])



    // создание темы
    let [inputTheme, setinputTheme] = useState('')

    let handleThemeInput = (event) => {
        setinputTheme(event.target.value)
        console.log(inputTheme)
    }

    let handleCreateTheme = () =>{
        if (inputTheme === ''){
            alert('Ви не ввели назву теми')
        } else {
            axios.post('http://localhost:1000/theme', {chapter_id: idt, name: inputTheme})
            alert("тему створено")
        }
    }



    return(
        <div className="themeDev">

            <div className="themeDev_content">
                <div className="themeDev_content_container">
                    
                    {
                        themeLoading ? (
                            (null)
                        ) : (
                            themes.map((item) => (
                                <ThemeDevMenu name = {item.name} key = {item.id} id = {item.subject_id} theme_id = {item.theme_id}></ThemeDevMenu>
                            ))
                        )
                    }
                    <div className="themeDev_content_addTheme">
                        <input type="text" placeholder="Тема, яку буде створено" value={inputTheme} onChange={handleThemeInput}/>
                        <div className="subjectDevPage_createBtn" onClick={handleCreateTheme}>+ Створити Тему</div>
                    </div>
                    
                    <FinalTest></FinalTest>
                </div>
            </div>
        </div>
    )
}

export default ThemeDevelopmentPage;