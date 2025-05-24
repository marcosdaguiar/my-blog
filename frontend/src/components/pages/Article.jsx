import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Request } from '../../helpers/Request'
import { List } from './List'
import { useParams } from 'react-router-dom'



export const Article = () => {

  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  
  useEffect(() => {

    getArticle();
  }, [])

  const getArticle = async () => {
    const { data, loading } = await Request(Global.url + 'article/' + params.id, 'GET')
    if (data.status === 'success') {
      setArticle(data.article);
      setLoading(false)
    } else {
      console.log('Error in the "GET" request');
      setLoading(false)
    }
  }

  return (
    <div className='jumbo'>
      {loading ? "Loading..." :
        (<>
          <div className='mask'>
            {article.image == "default-image.jpg" && <img src='https://cdn.iconscout.com/icon/free/png-512/free-article-icon-download-in-svg-png-gif-file-formats--blog-blogging-feed-news-simpline-mix-pack-user-interface-icons-267416.png' />}
            {article.image != "default-image.jpg" && <img src={Global.url + "image/" + article.image} />}

          </div>
          <h1>{article.title}</h1>
          <span>{article.date}</span>
          <p>{article.content}</p>
        </>
        )
      }
    </div>
  )
}
