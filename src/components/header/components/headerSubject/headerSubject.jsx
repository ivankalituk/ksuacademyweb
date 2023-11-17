import './headerSubject.scss'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function HeaderSubject(props){

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
        <div className="headerSubject">
            <div className="headerSubject_container">
                <Link to={`/сourse/${props.id}`} className="headerSubject_name">{props.name}</Link>

                <div className="headerSubject_subjects">
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
    )
}

export default HeaderSubject