import React from 'react'
import { useState, useEffect } from 'react';
import { useForms } from "../../hooks/useForms";
import { Request } from '../../helpers/Request';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';

export const Edit = () => {

  const {form, sent, modified} = useForms({});
  const [result, setResult] = useState('not_sent');
  const [article, setArticle]= useState({})
  const params = useParams();

  useEffect(() => {

    getArticle();
  }, [])

    const getArticle = async () => {
    const { data } = await Request(Global.url + 'article/' + params.id, 'GET')
    if (data.status === 'success') {
      setArticle(data.article);
    }
  }


  const editArticle = async(e) => {
    e.preventDefault();

    // Get data from form
    let newArticle = form;
    
    
    // Save article in the backend
    const {data} = await Request(Global.url+'article/' + params.id, 'PUT', newArticle)
    console.log(data)
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
      <h1>Edit Article</h1>
      <p>{article.title}</p>
      <strong>{result == 'saved' ? 'Article saved sucessfully!' : '' }</strong>
      <strong>{result == 'error' ? 'Input data is incorrect': '' }</strong>

      {/* Form to create a new article */}
      <form className='form' onSubmit={editArticle} >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={modified}  defaultValue = {article.title} required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" onChange={modified} defaultValue = {article.content} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file0">Image URL</label>
          <div className='mask'>
            {article.image == "default-image.jpg" && <img src='https://cdn.iconscout.com/icon/free/png-512/free-article-icon-download-in-svg-png-gif-file-formats--blog-blogging-feed-news-simpline-mix-pack-user-interface-icons-267416.png' />}
            {article.image != "default-image.jpg" && <img src={Global.url + "image/" + article.image} />}
          </div>
          <input type="file" id="file" name="file0"/>
        </div>
        <button type="submit" value= "Save" className='btn btn-success'>Save</button>
      </form>
  
    </div>
  )
}
