import React, { use } from 'react'
import {useState, useEffect} from 'react'
import { Global } from '../../helpers/Global'
import { Request } from '../../helpers/Request'



export const Articles = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {

    getArticles();
  },[])

  const getArticles = async () => {
    const {data, loading} = await Request(Global.url+'articles', 'GET')

    if(data.status === 'success'){
      setArticles(data.articles);
    }else{
      console.log('Error in the request');
    }
  }


  return (
    <>
      {
      articles.length >= 1 ? (
        articles.map(article => {
          return(
            <article key={article.id} className="article-item">
            <div className='mask'>
              <img src={article.image} alt="" />
            </div>
            <div className="article-info">
              <h3 className="title">{article.title}</h3>
              <p className="description">{article.content}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
            </article>
          )
        })
      )
      :
      (
        <h1>No articles to display</h1>
      )
    }

      
    
    </>
  )
}
