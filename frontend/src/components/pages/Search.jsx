import {useState, useEffect} from 'react'
import { Global } from '../../helpers/Global'
import { Request } from '../../helpers/Request'
import { List } from './List'
import { useParams } from 'react-router-dom'


export const Search = () => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams();
  console.log(params.item)
  useEffect(() => {

    getArticles();
  },[])

  useEffect(() => {

    getArticles();
  },[params])


  const getArticles = async () => {
    const {data, loading} = await Request(Global.url+'search/' + params.item, 'GET')
    
    if(data.status === 'success'){
      setArticles(data.articles);
      setLoading(false)
    }else{
      setArticles([])
      setLoading(false)
      console.log('Error in the "GET" request');
    }
  }

  return (
    <>
      {loading ? "Loading..." : <List articles={articles} setArticles={setArticles}/>   
    }
    </>
  )
}
