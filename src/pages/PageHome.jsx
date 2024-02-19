import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import React, { Component } from "react";
import Slider from "react-slick";
import MovieRow from '../components/MovieRow';
import Banner from '../components/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PageHome = () => {

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    return (
        <main>
            <section>
                <h2>Home Page</h2>
                <Banner />
            </section>
            <section className='movie-category-wrapper'>
                <h3>Now Playing</h3>
                <MovieRow category='now_playing'/>
            </section>
        </main>
    );
    
};

export default PageHome;