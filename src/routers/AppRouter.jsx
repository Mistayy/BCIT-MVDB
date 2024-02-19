// AppRouter

// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/PageFavourite';
import PageNotFound from '../pages/PageNotFound';
import PageDetail from '../pages/PageDetail';
import PageSearchResult from '../pages/PageSearchResult';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/movie-details/:id" element={<PageDetail />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favourite" element={<PageFavourite />} />
            <Route path="/search/:query" element={<PageSearchResult />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
