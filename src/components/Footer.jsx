import { getYear } from '../utilities/utilities';
import { Link } from 'react-router-dom'; 
import { appTitle } from '../globals/globals';
import logoImage from '../images/logo.svg';
import instaImage from '../images/insta.png';
import twitterImage from '../images/twitter.png';
import facebookImage from '../images/facebook.png';

const Footer = () => (
    <footer>
        <section className='logo-title'>
            <Link to="/">
                <img src={logoImage} alt="Logo" />
            </Link>
            <Link to="/">
                <h1>{appTitle}</h1>
            </Link>
        </section>
        <p>&copy; {getYear()} | FWD | Liwen Zhuang</p>
        <section className="social-media">
            <a href="#"><img src={instaImage} alt='instagramIcon'/></a>
            <a href="#"><img src={twitterImage} alt='twitterIcon'/></a>
            <a href="#"><img src={facebookImage} alt='facebbokIcon'/></a>
        </section>
            
    </footer>
);

export default Footer;