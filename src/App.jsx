import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { useContext, useEffect, useState } from 'react';
import { checkLogin } from './components/apiHelper/userApi.js';

const App = observer(() => {
  const { user } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    checkLogin()
      .then((response) => {
        user.setUser(response);
        user.setIsAuth(true);
      })
      .catch(() => {
        if (localStorage.getItem('token')) localStorage.removeItem('token');
      })
      .finally(() => setIsLoading(false));
  }, []);
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
