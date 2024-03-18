import { useEffect,useState} from 'react';
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

    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    return (
        <main>
            <section className='banner-section'>
                <Banner />
            </section>
            <section className='search-filter'>
                <div className='search'>
                    <Search />
                </div>
                <div className='filter'>    
                    <p>Category Filter</p>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="all">All</option>
                        <option value="popular">Popular</option>
                        <option value="now_playing">Now Playing</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="top_rated">Top Rated</option>
                    </select>
            </div>
            </section>
    

            <section className='movie-category-wrapper'>
                <div className={`popular ${selectedCategory === 'all' || selectedCategory === 'popular' ? '' : 'hidden'}`}>
                    <h2>Popular</h2>
                    <MovieRow category='popular' />
                </div>
                <div className={`now_playing ${selectedCategory === 'all' || selectedCategory === 'now_playing' ? '' : 'hidden'}`}>
                <h2>Now Playing</h2>
                <MovieRow category='now_playing' />
                </div>
                <div className={`upcoming ${selectedCategory === 'all' || selectedCategory === 'upcoming' ? '' : 'hidden'}`}>
                <h2>Upcoming</h2>
                <MovieRow category='upcoming' />
                </div>
                <div className={`top_rated ${selectedCategory === 'all' || selectedCategory === 'top_rated' ? '' : 'hidden'}`}>
                <h2>Top Rated</h2>
                <MovieRow category='top_rated' />
                </div>
            </section>
        </main>
    );
    
};

export default PageHome;