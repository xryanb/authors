import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/new'>Add an author</Link>
            <h2>We have quotes by:</h2>
            <div className='m-auto d-flex justify-content-center alight-items-center '>
                <table>
                    <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                    </thead>
                    <tbody>
                {props.author.map( (person, i) => { 
                    
                    return(
                        
                    <tr key={person._id}>
                        <td>{person.author}</td>
                        <td><Link to={`/author/${person._id}/edit`}>Edit</Link>&nbsp;&nbsp;</td>
                        <td><button className="btn btn-danger" onClick={(e)=>{deleteAuthor(person._id)}}>Delete</button></td>
                    </tr>
                )}
        
            )}
            </tbody>
                </table>
                </div>
        </div>
    )
}
    
export default AuthorList;

