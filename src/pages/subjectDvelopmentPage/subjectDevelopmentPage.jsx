import './subjectDevelopmentPage.scss'

import SubjectDevelopmentCourse from "./components/subjectDevelopmentCourse/subjectDevelopmentCourse"

import Select from 'react-select'

function SubjectDevelopmentPage(){

    //данные в селекторе
    let options = [
        {value: "1", label: "Математичний аналіз"},
        {value: "2", label: "Предмет 2"},
        {value: "3", label: "Предмет 3"},
        {value: "4", label: "Предмет 4"},
    ]

    //нужно получить список предметов по айди преподавателя, которое находится в редаксе
    let teacher_id = 1;

    

    return(
        <div className="subjectDevPage">
            <div className="subjectDevPage_selector">
                <Select options={options} placeholder={'Оберіть предмет'}></Select>
            </div>

            <div className="subjectDevPage_createSubject">+ Створити Предмет</div>

            <div className="subjectDevPage_heading">Математичний аналіз</div>

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