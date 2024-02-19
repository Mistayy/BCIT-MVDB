import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerCard = ({title,releaseDate,backDropImagePath}) => {

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/';
    var imgUrl = imgBaseUrl + backDropImagePath;

    return (
        <article className='banner-card'>
            <div className="img-wrapper" >
                <img src={imgUrl} alt="movie back drop" />
                <div className="info-wrap">
                    <p className="title">{title}</p>
                    <p className="release-date">{releaseDate}</p>
                </div>
            </div>
        </article>
    );

};

export default BannerCard;
