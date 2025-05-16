import React, { use } from 'react'
import {useState, useEffect} from 'react'



export const Articles = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {

    getArticles();
  },[])

  const getArticles = async () => {
    const url = 'http://localhost:3900/api/articles';
    let request = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let data = await request.json();

    if(data.status === 'success'){
      setArticles(data.articles);
    }else{
      console.log('Error in the request');
    }
  }


  return (
    <>
    {articles.map(article => {
      return(
        <article key={article.id} className="article-item">
        <div className='mask'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Portada" />
        </div>
        <div className="article-info">
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.description}</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>
      )
    })}
      
    </>
  )
}
