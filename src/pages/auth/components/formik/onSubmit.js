import authenticateUser from "./authenticateUser";
import { USER_ROUTE } from '../../../../utils/consts';


const onSubmit = async (values, enqueueSnackbar, user, navigate) => {
  console.log('Email:', values.email);
  console.log('Password:', values.password);
  
  const isUserAuthenticated = authenticateUser(values.email, values.password);
  localStorage.setItem('isAuthenticated', true)
  console.log('Is User Authenticated:', isUserAuthenticated);

  if (isUserAuthenticated) {
    user.setIsAuth(true);
    navigate(USER_ROUTE);
  } else {
    enqueueSnackbar('Невірні email або пароль', { variant: 'error' });
  }
};

export default onSubmit