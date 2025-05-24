import React from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { Link } from 'react-router-dom';

export const List = ({ articles, setArticles }) => {
    if(!articles || articles.length === 0) return (
        <h1>No articles found</h1>   
    );

    const deleteArticle = async(id) =>{
        let {data} = await Request(Global.url + 'article/'+id, 'DELETE')
        if(data.status === 'success'){
            let updatedArticles = articles.filter(article => article._id !== id)
            setArticles(updatedArticles)
        }
    }

    return ( 
        articles.map(article => {
            return (
                <article key={article.id} className="article-item">
                    <div className='mask'>
                        {article.image == "default-image.jpg" && <img src='https://cdn.iconscout.com/icon/free/png-512/free-article-icon-download-in-svg-png-gif-file-formats--blog-blogging-feed-news-simpline-mix-pack-user-interface-icons-267416.png' />}
                        {article.image != "default-image.jpg" && <img src={Global.url + "image/" + article.image} />}
                   
                    </div>
                    <div className="article-info">
                        <h3 className="title"><Link to ={'/article/' + article._id}>{article.title}</Link></h3>
                        <p className="description">{article.content}</p>
                        <Link to={'/edit/'+ article._id} className="edit">Edit</Link>
                        <button className="delete" onClick={() => {deleteArticle(article._id)}}>Delete</button>
                    </div>
                </article>
            )
        })
    )
}
