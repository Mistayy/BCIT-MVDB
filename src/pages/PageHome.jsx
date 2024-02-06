import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import RatingIcon from '../components/RatingIcon';
import MovieCard from '../components/MovieCard';

const PageHome = () => {

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    const movieRating = 80;
    return (
        <main>
            <section>
                <h2>Home Page</h2>
                <article>
                    <h2>Article 01</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quas modi cupiditate iusto? Placeat, molestias expedita tempora error cumque similique amet natus eum nesciunt doloribus totam, incidunt ducimus dolores optio!</p>
                </article>
                <article>
                    <h2>Article 02</h2>
                    <p>Accusamus tempora assumenda laborum aliquam totam, perferendis optio delectus porro molestias odio, nostrum quidem maiores, illo impedit quod dignissimos ut eligendi. Veritatis quis ea est nisi ad accusamus et ullam.</p>
                </article>
            </section>
            <section>
                <RatingIcon rating={movieRating} />
            </section>
            <section>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
        </main>
    );
    
};

export default PageHome;