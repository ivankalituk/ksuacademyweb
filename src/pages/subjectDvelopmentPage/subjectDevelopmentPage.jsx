import './subjectDevelopmentPage.scss'

import SubjectDevelopmentCourse from "./components/subjectDevelopmentCourse/subjectDevelopmentCourse"

import Select from 'react-select'

function SubjectDevelopmentPage(){

    //данные в селекторе
    let options = [
        {value: "1", label: "Предмет 1"},
        {value: "2", label: "Предмет 2"},
        {value: "3", label: "Предмет 3"},
        {value: "4", label: "Предмет 4"},
    ]

    //нужно получить список предметов по айди преподавателя, которое находится в редаксе
    let teacher_id = 1;

    

    return(
        <div className="subjectDevPage">

            <Select options={options}></Select>

            <div className="subjectDevPage_createSubject">+ Створити Предмет</div>

            <div className="subjectDevPage_heading">назва предмету</div>

            <div className="subjectDevPage_courses"> 
                <SubjectDevelopmentCourse></SubjectDevelopmentCourse>
                <SubjectDevelopmentCourse></SubjectDevelopmentCourse>
                <SubjectDevelopmentCourse></SubjectDevelopmentCourse>
                <SubjectDevelopmentCourse></SubjectDevelopmentCourse>
            </div>

        </div>
    )
}

export default SubjectDevelopmentPage