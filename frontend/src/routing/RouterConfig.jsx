import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Main } from "../components/pages/Main";
import { Articles } from "../components/pages/articles";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";

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
                </Routes>
            </section>

            <Sidebar />
            <Footer/>
        </BrowserRouter>
        
    )
}