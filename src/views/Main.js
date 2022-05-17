import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList';





const Main=() => {
    const [author, setAuthor] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setAuthor(author.filter(person => person._id !== personId));
    }

    return (
        <div>
            <AuthorList author={author} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;