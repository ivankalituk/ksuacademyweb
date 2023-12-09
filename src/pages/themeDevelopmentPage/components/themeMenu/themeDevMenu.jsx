import './themeMenu.scss'

import Lection from './components/lection/lection';
import Test from './components/test/test'
import { Link } from 'react-router-dom';

import deletesvg from '../../../../assets/photos/delete.svg'
import axios from 'axios';

function ThemeDevMenu(props){

    //получение лекций
    



    //получение теста


    //НЕ УЧТЕНО ЧТО У ТЕМЫ ЕСТЬ ЛЕКЦИИ ИЛИ ТЕСТ
    //удаление темы
    let handleDeleteTheme = () => {
        axios.delete('http://localhost:1000/theme', {params: {theme_id: props.theme_id}})
        alert('Тему видалено')
    }

    return(
        <div className="themeDevMenu">
            <div className="themeDevMenu_container">
                <div className="themeDevMenu_container_header">
                    <h4>{props.name}</h4>
                    <div className="themeDelete" onClick={handleDeleteTheme}><img src={deletesvg} alt="delete" /></div>
                </div>
                <div className="themeDev_content_container">
                    <div className="themeDev_lections">
                        <span>Навчальні мітеріали</span>
                        <div className="lections_container">
                            <Lection></Lection>
                            <Lection></Lection>
                            <Lection></Lection>

                            <Link className="themeDev_createLection">+ Створити лекцію</Link>
                        </div>
                    </div>

                    <div className="practice">
                        <span className="practice_heading">Практичні завдання</span>
                        <div className="practice_container">
                            <Test></Test>
                            <Link className="themeDev_createTest">+ Створити тест</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default ThemeDevMenu;