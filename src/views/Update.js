import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Update=() => {
    const{id}=useParams();
    const [author, setAuthor] = useState(""); 
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor(res.data.author);
            })
    }, [id]);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {
            author
        })
            .then(res => {
                navigate('/',{replace:true})
                console.log(res)})
                
                .catch(err=>{
                    console.log(err)
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)}
                        setErrors(errorArr);
                })
    }


    const abortMission=()=>{
        navigate('/',{replace:true})
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/new'>Home</Link>
            <h3>Edit this author:</h3>
            <div>
        <form onSubmit={updatePerson}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name :</label><br/>
                <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
            </p>
            <button onClick={abortMission} variant="danger">Cancel</button> &nbsp;&nbsp;
            <input type="submit"/>
        </form>
        </div>
        </div>
    )
}

export default Update;