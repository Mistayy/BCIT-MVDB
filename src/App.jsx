import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './styles/styles.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </>
  )
}

export default App
