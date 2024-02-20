import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import React from "react";
import Search from '../components/SearchBar';
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
                <Banner />
            </section>
            <section>
                <Search />
            </section>
            <section className='movie-category-wrapper'>
                <div className='popular'>
                    <h2>Popular</h2>
                    <MovieRow category='popular'/>
                </div>
                <div className='now_playing'>
                    <h2>Now Playing</h2>
                    <MovieRow category='now_playing'/>
                </div>
                <div className='upcoming'>
                    <h2>Upcoming</h2>
                    <MovieRow category='upcoming'/>
                </div>
                <div className='top Rated'>
                        <h2>Top Rated</h2>
                        <MovieRow category='top_rated'/>
                </div>
            </section>
        </main>
    );
    
};

export default PageHome;