import React, { useState } from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

const AuthorForm=() => {
    const [author, setAuthor] = useState(""); 
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            author,
        })
            .then(res=>{
                console.log(res)
                // navigate('/',{replace:true})
            })
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
            <Link to='/'>Home</Link>
            <h3>Add a new author:</h3>
            <div>
        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name :</label><br/>
                <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
            </p>
            <button onClick={abortMission}>Cancel</button> &nbsp;&nbsp;
            <input type="submit"/>
        </form>
        </div>
        </div>
    )
}

export default AuthorForm;