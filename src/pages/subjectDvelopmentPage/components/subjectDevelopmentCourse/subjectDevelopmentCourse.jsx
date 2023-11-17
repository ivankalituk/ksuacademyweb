import "./subjectDevelopmentCourse.scss";

import { Link } from "react-router-dom";

import courseImg from "../../../../assets/photos/courseSample.svg"

function SubjectDevelopmentCourse(){

    //данные получают по айди преподавателя, занесённого в редукс
    let teacher_id = 1;




    return(
        <div className="subdev_course">
            <div className="subdev_course_container">
                <div className="subdev_course_header">
                    <div className="subdev_course_img"><img src={courseImg} alt="courseImg" /></div>
                    
                    {/* CHANGE LINK */}
                    <Link to='/' className="subdev_course_heading">Назва розділу</Link>
                </div>
                
                <div className="subdev_course_info">
                    <Link to='/'>Тема</Link>
                    <Link to='/'>Тема</Link>
                    <Link to='/'>Тема</Link>
                    <Link to='/'>Тема</Link>
                    <Link to='/'>Тема</Link>
                    <Link to='/'>Тема</Link>
                    <Link to='/'>Тема</Link>
                </div>
            </div>
        </div>
    )
}

export default SubjectDevelopmentCourse;