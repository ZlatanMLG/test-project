import { 
    Avatar, 
    Button, 
    CssBaseline, 
    TextField, 
    Box, 
    Typography, 
    Container, 
    createTheme, 
    ThemeProvider } from '@mui/material';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import validationSchema from '../../components/getFormik/validationScheme';
  import Submit from '../../pages/auth/components/formik/Submit';
  import NewFormikObject from '../../components/getFormik';
  import initialValues from '../../pages/auth/components/formik/formik';
  import { useNavigate } from 'react-router-dom';
  
  const SignIn = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
      Submit(values, navigate);
    }
    const formik = NewFormikObject(initialValues, validationSchema, onSubmit);
    const { handleSubmit, handleChange, values, touched, errors } = formik;
    return (
    <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Увійти до системи
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Електронна пошта"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
            />
            <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Увійти
            </Button>
            </Box>
        </Box>
        </Container>
    </ThemeProvider>
    );
  };
  
  export default SignIn;