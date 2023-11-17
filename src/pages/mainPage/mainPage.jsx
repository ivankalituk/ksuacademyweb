import "./mainPage.scss"

import { Link } from "react-router-dom"

import univer from "../../assets/photos/universityMainPage.png"
import cat1 from "../../assets/photos/mainPageCat1.png"
import cat2 from "../../assets/photos/mainPageCat2.png"

import Subject from "./components/subject/subjectMP";
import { useEffect, useState } from "react"
import axios from "axios"

function MainPage(){

    


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
        <div className="mainPage">
            <div className="mainPage_mainInfo">
                <div className="mainPage_mainInfo_img">
                    <img src={univer} alt="univercity" />
                </div>
                <div className="mainPage_mainInfo_container">
                    <div className="mainPage_mainInfo_heading">
                        Реальні результати для кожного учня
                    </div>

                    <div className="mainPage_mainInfo_info">
                        Академія представляє широкі можливості для комунікації та взаємодії 
                        учасників навчального процесу. система створює і зберігає портфоліо 
                        кожного учня: всі здані ним роботи, всі повідомлення у форумі, всі 
                        оцінки і коментарі викладача до робіт.
                    </div>

                    <div className="mainPage_mainInfo_buttons">
                        <Link to="/registrarion"><span>Студент</span></Link>
                        <Link to="/registrarion"><span>Вчитель</span></Link>
                    </div>
                </div>
            </div>

            <div className="mainPage_courses">
                <div className="mainPage_courses_heading">курси</div>
                
                <div className="mainPage_courses_columns" >
                    {
                        loading ? (
                            (null)
                        ) : (
                            subjects.map((item) => (
                                <Subject name = {item.name} key = {item.subject_id} id = {item.subject_id}></Subject>
                            ))
                        )
                    }
                </div>
                
            </div> 

            <div className="mainPage_secInfo">
                <div className="mainPage_secInfo_first">
                    <div className="mainPage_secInfo_firstImg">
                        <img src={cat1} alt="cat" />
                    </div>

                    <div className="mainPage_secInfo_container">
                        <div className="mainPage_secInfo_heading">Залучаємо до навчання кожного студента</div>
                        <div className="mainPage_secInfo_info">
                            Одна із сильних сторін системи – широкі можливості для комунікації та взаємодії 
                            учасників навчального процесу. Сервіс розсилки дозволяє оперативно інформувати 
                            всіх учасників курсу або окремі групи про поточні події.
                        </div>
                    </div>
                </div>

                <div className="mainPage_secInfo_second">
                    <div className="mainPage_secInfo_container">
                        <div className="mainPage_secInfo_heading">Навчайся дистанційно</div>
                        <div className="mainPage_secInfo_info">
                            Система дистанційного навчання «KSU Online» призначена для організації дистанційної 
                            освіти та обміну інформацією як між викладачем і студентом, так і між самими 
                            студентами.
                        </div>
                    </div>

                    <div className="mainPage_secInfo_secImg">
                        <img src={cat2} alt="cat" />
                    </div>
                </div>
            </div>

            <div className="mainPage_partners">
            
            </div>            
        </div>
    )
}

export default MainPage;