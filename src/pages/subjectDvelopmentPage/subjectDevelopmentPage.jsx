import './subjectDevelopmentPage.scss'

import SubjectDevelopmentCourse from "./components/subjectDevelopmentCourse/subjectDevelopmentCourse"

import Select from 'react-select'
import { useState, useEffect } from 'react';
import axios from 'axios';

function SubjectDevelopmentPage(){

    //нужно получить список предметов по айди преподавателя, которое находится в редаксе
    let teacher = 1;

    //предметы и загрузка предметов
    let [subjects, setSubjects] = useState([]);
    let [loading, setLoading] = useState(false);

    // получение преедметов 
    async function fetchSubject() {
        setLoading(true)

        let res = await axios.get('http://localhost:1000/subjectByTeacherId', {params: {teacher_id: teacher}}).then(({data}) => data).finally(setLoading(false))
        return res
    }

    useEffect(() => {
        fetchSubject().then((data) => setSubjects(data))
    }, []);



    let options = [] //опции реакт-селекта

    let [selectedOption, setSelectedoption] = useState(null)

    // заполнение реакт-селекта
    if (!loading){
        options = subjects.map((item) => ({
            value: item.subject_id,
            label: item.name
        }))
    }

    let [chapters, setChapters] = useState([])
    let [loadingChapter, setLoadingChapter] = useState(false)

    //получение разделов
    async function fetchChapter(id){
        setLoadingChapter(true)
        let res = await axios.get('http://localhost:1000/chapter', {params: {subject_id: id}}).then(({data}) => data).finally(setLoadingChapter(false))
        return res
    }

    let [subName, setSubName] = useState('предмет не обрано')

    //функция получения данных от реакт-селекта 
    let handleChangeOption = (option) => {
        console.log(option)
        setSelectedoption(option)
        setSubName(option.label)
        fetchChapter(option.value).then((data) => setChapters(data))
    }

    

    // создание предмета
    let [inputSubject, setInputSubject] = useState('')

    let handleSubjectInput = (event) => {
        setInputSubject(event.target.value)
    }

    //пост запрос о создании предмета
    async function postSubject(subjectName){
        await axios.post('http://localhost:1000/subject', {name: subjectName, teacher_id: teacher})
    }

    let handleCreateSubject = () =>{
        console.log(inputSubject)
        if (inputSubject === ''){
            alert ('Ви не ввели назву предмету')
        }
        else{
            postSubject(inputSubject)
        }
    }

    let handleDeleteSubject = () =>{
        axios.delete('http://localhost:1000/subject', {params: {subject_id: selectedOption.value}})
        console.log('DELETED')
    }


    // создание раздела
    let [inputChapter, setInputChapter] = useState('')
    
    // изменения в инпуте
    let handleChapterInput = (event) => {
        setInputChapter(event.target.value)
    }

    // создание раздела
    let handleCreateChapter = () =>{
        console.log(inputChapter)
        if (inputChapter === ''){
            alert ('Ви не ввели назву розділу')
        }
        else{
            postChapter(inputChapter)
        }
    }

    async function postChapter(inputChapter){
        await axios.post('http://localhost:1000/chapter', {name: inputChapter, subject_id: selectedOption.value})
    }


    return(
        <div className="subjectDevPage">
            <div className="subjectDevPage_selector">
                <Select options={options} placeholder={'Оберіть предмет'} onChange={handleChangeOption}></Select>
            </div>
            
            <div className="subjectDevPage_createSubject">
                <input type="text" value={inputSubject} onChange={handleSubjectInput} placeholder="Предмет, який буде створено" />
                <div className="subjectDevPage_createBtn" onClick={handleCreateSubject}>+ Створити Предмет</div>
                <div className="subjectDevPage_removeBtn" onClick={handleDeleteSubject}>- Видалити Предмет</div>
            </div>

            <div className="subjectDevPage_heading">{subName}</div>

            <div className="subjectDevPage_courses">
                {
                    loadingChapter?(
                        null
                    ) : (
                        chapters.map((item) => (
                            <SubjectDevelopmentCourse key={item.id} name={item.name} chapter_id={item.chapter_id} subject_id={item.subject_id}></SubjectDevelopmentCourse>
                        ))
                    )
                }
            </div>
            
            <div className="subjectDevPage_createSubject">
                <input type="text" value={inputChapter} onChange={handleChapterInput} placeholder="Розділ, який буде створено" />
                <div className="subjectDevPage_createBtn" onClick={handleCreateChapter}>+ Створити Розділ</div>
            </div>
        </div>
    )
}

export default SubjectDevelopmentPage