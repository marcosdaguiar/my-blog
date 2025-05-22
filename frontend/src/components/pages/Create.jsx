import React from 'react'
import { useState } from 'react';
import { useForms } from "../../hooks/useForms";

export const Create = () => {

  const {form, sent, modified} = useForms({});

  const saveArticle = (e) => {
    e.preventDefault();
    let newArticle = JSON.stringify(form);
    console.log(newArticle);
  }


  return (
    <div className='jumbo'>
      <h1>Create New Article</h1>
      <p>Fill up the form</p>

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
