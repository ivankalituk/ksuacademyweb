import "./subjectMP.scss"

import courseSample from "../../../../assets/photos/courseSample.svg"
import arrow from "../../../../assets/photos/courseArrow.svg"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Subject(props){

    let [isChecked, setChecked] = useState(false);

    //аккордеон 
    let handleCheck = () => {
        setChecked(!isChecked)
        // console.log(isChecked)
    }

    //проверка загрузки данных
    let [loading, setLoading] = useState(false);
    let [chapters, setChapters] = useState([])

    async function fetchData() {
        setLoading(true)
        let res = await axios.get('http://localhost:1000/chapter', {params: {subject_id: props.id}}).then(({data}) => data).finally(setLoading(false))
        return res
      }

    useEffect(() => {
        fetchData()
        fetchData().then((data) => setChapters(data))
    }, []);



    return(
        <div className="mainPage_subjectList_subject">
            <div className="courseList_subject_container">

                <div className="subjectList_subject_heading">
                    <div className="subjectList_subject_nameGroup">
                        <div className="subjectList_subject_img"><img src={courseSample} alt="courseImg" /></div>

                        <Link to={`/сourse/${props.id}`} className="subjectList_course_name">{props.name}</Link>
                    </div>

                    <div className="subjectList_subject_checkbox">
                        <input type="checkbox" className="subject_customCheck" onChange={handleCheck}/>
                        <img src={arrow} alt="arrow" className={isChecked? "subject_arrow" : "activeSubject_arrow"}/>
                    </div>
                </div>

                <div className={isChecked? "subjectList_subject_course" : "activeCourseList_subject_course subjectList_subject_course"} >
                    <div className="subject_course_container">
                        {
                            loading?(
                                null
                            ) : (
                                chapters.map((item)=>(
                                    <Link to={`/course/${props.id}/theme/${item.chapter_id}`}>{item.name}</Link>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subject;