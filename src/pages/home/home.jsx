import {Grid, Typography, Button } from '@mui/material'
import { LOGIN_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <Typography component="h1" variant="h5">
          Домашня сторінка
        </Typography>
      </Grid>
      <Grid item>
        <Link to={LOGIN_ROUTE}>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Увійти
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HomePage;