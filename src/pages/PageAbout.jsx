import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section>
                <h2>About Page</h2>
                <p>
                This product uses the TMDb API but is not endorsed or certified by TMDb. 
                The “WizLen” is an application that allows users to easily search, 
                favorite, and find other valuable information about movies around the world. 
                This application uses the TMDb API. 
                This application was created for educational purposes only.
                </p>
            </section>
        </main>
    );
    
};

export default PageAbout;