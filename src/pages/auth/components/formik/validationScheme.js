import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Невірна адреса електронної пошти').required("Обов'язково"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        'Пароль має містити принаймні одну нижню літеру, одну велику літеру та один спеціальний символ'
      )
      .required("Обов'язково"),
  });
export default validationSchema