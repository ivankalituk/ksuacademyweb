import "./subjectDevelopmentCourse.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import courseImg from "../../../../assets/photos/courseSample.svg"
import deleteImg from "../../../../assets/photos/delete.svg"

function SubjectDevelopmentCourse(props){

    //данные получают по айди преподавателя, занесённого в редукс
    let teacher_id = 1;

    let [loading, setLoading] = useState(false)
    let [themes, setThemes] = useState([])

    async function fetchData() {
        setLoading(true)
        let res = await axios.get('http://localhost:1000/theme', {params: {chapter_id: props.chapter_id}}).then(({data}) => data).finally(setLoading(false))
        return res
      }

    useEffect( () => {
        fetchData().then((data) => setThemes(data))
    }, [])
 
    let fetchDeleteChapter = async () => {
        await axios.delete('http://localhost:1000/chapter', {params: {chapter_id: props.chapter_id}})
    }

    let handleDeleteChapter = () => {
        if (themes.length === 0){
            fetchDeleteChapter()
            alert('Розділ видалено')
        } else {
            alert('Спочатку видаліть теми цього розділу')
        }
    }




    return(
        <div className="subdev_course">
            <div className="subdev_course_container">
                <div className="subdev_course_header">
                    <div className="subdev_course_img"><img src={courseImg} alt="courseImg" /></div>
                    
                    {/* CHANGE LINK */}
                    <Link to={`/SubjectDevelopment/${props.subject_id}/ThemeDevelopment/${props.chapter_id}`} className="subdev_course_heading">{props.name}</Link>

                    <div className="subdev_course_delete" onClick={handleDeleteChapter}>
                        <img src={deleteImg} alt="DELETE" />
                    </div>
                </div>
                

                <div className="subdev_course_info">
                    {loading? (
                        null
                    ) : (
                        themes.map((item) => (
                            <Link to= {`/course/${props.subject_id}/theme/${props.chapter_id}`}>{item.name}</Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default SubjectDevelopmentCourse;