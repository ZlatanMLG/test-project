import authenticateUser from "./authenticateUser";
import { USER_ROUTE } from '../../../../utils/consts';


const onSubmit = async (values, navigate) => {
  console.log('Email:', values.email);
  console.log('Password:', values.password);
  
  const isUserAuthenticated = authenticateUser(values.email, values.password);
  localStorage.setItem('isAuthenticated', true)
  console.log('Is User Authenticated:', isUserAuthenticated);

  if (isUserAuthenticated) {
    navigate(USER_ROUTE);
  } else {
    alert('Неправильні пошта чи пароль');
  }
};

export default onSubmit