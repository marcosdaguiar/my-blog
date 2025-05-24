import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Main } from "../components/pages/Main";
import { Articles } from "../components/pages/Articles";
import { Article } from "../components/pages/Article";
import { Edit } from "../components/pages/Edit";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { Create } from "../components/pages/Create";
import { Search } from "../components/pages/Search";

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header />
            <Nav />

            {/* Central Content and Routing */}
            <section id="content" className="content">
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/main' element={<Main/>} />
                    <Route path='/articles' element={<Articles/>} />
                    <Route path='/create-articles' element={<Create/>} />
                    <Route path='/search/:item' element={<Search/>}/>
                    <Route path='/article/:id' element={<Article/>}/>
                    <Route path='/edit/:id' element={<Edit/>}/>
                    <Route path='*' element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                        </div>


                    } />
                </Routes>
            </section>

            <Sidebar />
            <Footer/>
        </BrowserRouter>
        
    )
}