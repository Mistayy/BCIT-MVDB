import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageFavourite = () => {

    useEffect(() => {
        document.title = `${appTitle} - Favourite`;
    }, []);

    return (
        <main>
            <section>
                <h2>Favourite Page</h2>
            </section>
        </main>
    );
    
};

export default PageFavourite;