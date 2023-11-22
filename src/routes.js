import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

//Import dos componentes - PAGINAS

import EventosPage from "./pages/EventosPages/EventosPage";
import HomePage from "./pages/HomePage/HomePage";
import TipoEventosPage from './pages/TipoEventosPage/TipoEventosPage';
import LoginPage from './pages/LoginPage/LoginPage';
import TestePage from './pages/TestePage/TestePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

const Rotas = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route element={ <HomePage />} path={"/"} exact />
                <Route element={ <EventosPage />} path={"/eventos"} exact />
                <Route element={ <TipoEventosPage />} path={"/tiposeventos"} exact />
                <Route element={ <LoginPage />} path={"/login"} exact />
                <Route element={ <TestePage />} path={"/testes"} exact />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Rotas;