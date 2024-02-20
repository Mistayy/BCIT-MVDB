import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import React from 'react';
import { store } from './store/store'
import './styles/styles.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
//set up the context, tried to store genre list but turns out movie detail has it so no longer used it.

// export const AppContext = React.createContext();


function App() {
  // const [genre, setGenre] = useState(null);

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', movieDBoptions)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch genre data');
  //       }
  //       return response.json();
  //     })
  //     .then(response => {
  //       setGenre(response.genres);
  //     })
  //     .catch(err => console.error(err));
  // }, []); 
  return (
    <>
        <Provider store={store}>
          {/* <AppContext.Provider value={genre}> */}
            <AppRouter />
          {/* </AppContext.Provider> */}
        </Provider>
    </>
  )
}

export default App
