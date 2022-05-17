import React from 'react';
import './App.css';
import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import {Routes,Route} from "react-router-dom";
import Update from './views/Update';




function App() {
  return (
    <div className="App">
    

    <Routes>
      <Route path='/' element={<Main/>}/>
    <Route path='/new' element={<AuthorForm/>}/>
    <Route path='/author/:id/edit' element={<Update/>}/>

    </Routes>

    </div>
  );
}

export default App;
