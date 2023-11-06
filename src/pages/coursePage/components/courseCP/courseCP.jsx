import "./courseCP.scss";

import { Link } from "react-router-dom";

import courseImg from "../../../../assets/photos/courseSample.svg"
import { useEffect, useState } from "react";
import axios from "axios";

function CourseCP(props){

    //получение тем разделов
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

    return(
        <div className="coursePage_course">
            <div className="coursePage_course_container">
                <div className="coursePage_course_header">
                    <div className="coursePage_course_img"><img src={courseImg} alt="courseImg" /></div>
                    
                    <Link to={`/course/${props.chapter_id}/theme/${1}`} className="coursePage_course_heading">{props.name}</Link>
                </div>
                
                <div className="coursePage_course_info">
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

export default CourseCP;