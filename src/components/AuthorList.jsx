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
            <div>
                <table>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                {props.author.map( (person, i) => { 
                    return(
                    <tr key={i}>
                        <td>{person.author}</td>
                        <td><Link to={`/author/${person._id}/edit`}>Edit</Link>&nbsp;&nbsp;</td>
                        <button onClick={(e)=>{deleteAuthor(person._id)}}>Delete</button>
                    </tr>
                    
                )}
            )}
                </table>
                </div>
        </div>
    )
}
    
export default AuthorList;

