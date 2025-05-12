import React from 'react'

export const Sidebar = () => {
  return (
    <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>
            
        </aside>
  )
}
