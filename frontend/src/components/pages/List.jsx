import React from 'react'

export const List = ({ articles, setArticles }) => {
    if(!articles || articles.length === 0) return (
        <h1>No articles found</h1>
    );

    return ( 
        articles.map(article => {
            return (
                <article key={article.id} className="article-item">
                    <div className='mask'>
                        <img src={article.image} alt="" />
                    </div>
                    <div className="article-info">
                        <h3 className="title">{article.title}</h3>
                        <p className="description">{article.content}</p>
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </article>
            )
        })
    )
}
