import React from 'react'
import { useState } from 'react';
import { useForms } from "../../hooks/useForms";
import { Request } from '../../helpers/Request';
import { Global } from '../../helpers/Global';

export const Create = () => {

  const {form, sent, modified} = useForms({});
  const [result, setResult] = useState('not_sent');

  const saveArticle = async(e) => {
    e.preventDefault();

    // Get data from form
    let newArticle = form;
    
    // Save article in the backend
    const {data} = await Request(Global.url+'create', 'POST', newArticle)

    if(data.status === 'success'){
      setResult('saved');

      // Upload the image
      const fileInput = document.querySelector('#file');
      
      // Add this check
      if(fileInput.files[0]){
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);

        const upload = await Request(Global.url+'upload-image/' + data.article._id, 'POST', formData, true);
        
        if(upload.data.status === 'success'){
          setResult('saved');
        }
      }
    }
    else{
      setResult('error');
    }
}

  return (
    <div className='jumbo'>
      <h1>Create New Article</h1>
      <p>Fill up the form</p>
      <strong>{result == 'saved' ? 'Article saved sucessfully!' : '' }</strong>
      <strong>{result == 'error' ? 'Input data is incorrect': '' }</strong>

      {/* Form to create a new article */}
      <form className='form' onSubmit={saveArticle} >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={modified} required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" onChange={modified} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file0">Image URL</label>
          <input type="file" id="file" name="file0"/>
        </div>
        <button type="submit" value= "Save" className='btn btn-success'>Create</button>
      </form>
  
    </div>
  )
}
