import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const performSearch = (e) => {
    e.preventDefault();
    let mySearch = e.target.search_field.value
    navigate('/search/'+mySearch, {replace: true})
  } 

  return (
    <aside className='sidebar'>
            <div className='search'>
                <h3 className='title'>Search</h3>
                <form onSubmit={performSearch}>
                    <input type='text' name='search_field'/>
                    <input type='submit' id='search' value='Buscar'/>
                </form>
            </div>
            
        </aside>
  )
}
