import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SnackbarCloseButton from './components/SnackbarCloseButton';
import UserStore from './store/User';
import { HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import Slide from '@mui/material/Slide';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <HelmetProvider>
      <SnackbarProvider
        action={(snackbarKey) => (
          <SnackbarCloseButton snackbarKey={snackbarKey} />
        )}
        maxSnack={5}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        TransitionComponent={Slide}
      >
        <App />
      </SnackbarProvider>
    </HelmetProvider>
  </Context.Provider>
)
