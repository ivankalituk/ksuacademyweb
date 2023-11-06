import "./coursePage.scss"

import CourseCP from "./components/courseCP/courseCP"

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CoursePage(){

    //айди передан через адрес
    let {id} = useParams()

    //стейт для названия предмета
    let [subject, setSubject] = useState([
        {name: "subject_name"}
    ]);

    // стейт для разделов
    let [chapters, setChapters] = useState([])

    // проверка загрузки данных
    let [loadingSubject, setLoadingSubject] = useState(false);
    let [loadingChapter, setLoadingChapter] = useState(false)

    //получение одного предмета и получение разделов
    async function fetchDataSubject() {
        setLoadingSubject(true)
        let res = await axios.get('http://localhost:1000/subject/'+id).then(({data}) => data).finally(setLoadingSubject(false))
        return res
      }
    
    async function fetchDataChapter() {
        setLoadingChapter(true)
        let res = await axios.get('http://localhost:1000/chapter', {params: {subject_id: id}}).then(({data}) => data).finally(setLoadingChapter(false))
        return res
      }

      useEffect(() => {
        fetchDataSubject().then((data) => setSubject(data))
        fetchDataChapter().then((data) => setChapters(data))
    }, []);


    return(
        <div className="subjectPage">
            {loadingSubject? (
                null
            ) : (
                <div className="subjectPage_heading">{subject[0].name}</div>
            )}

            <div className="subjectePage_courses">
                {
                    loadingChapter && loadingSubject?(
                        null
                    ) : (
                        chapters.map((item) => (
                            <CourseCP key={item.chapter_id} name={item.name} chapter_id={item.chapter_id} subject_id={subject[0].subject_id}></CourseCP>
                        ))
                    )
                }
            </div>

        </div>
    )
}

export default CoursePage;