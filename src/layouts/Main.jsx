import React from 'react';
import './Main.css'
import Header from '../components/Shared/Header/Header';
import Home from '../components/Home/Home';

const Main = () => {
    return (
        <div className="home lg:px-32">
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default Main;