import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section>
                <h2>About this web application</h2>
                <p>
                This product uses the TMDb API but is not endorsed or certified by TMDb. <br />
                The “WizLen” is an application that allows users to easily search, 
                favorite, and find other valuable information about movies around the world. <br />
                This application was created for educational purposes only.
                </p>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" 
                    alt="TMDB logo" 
                    style={{width: '300px'}}/>
            </section>
        </main>
    );
    
};

export default PageAbout;