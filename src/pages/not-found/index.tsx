import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{mt: 20}}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs>
          <Typography component="h1" variant="h4" align="center">
            404 - Not Found!
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography align="center">
            <Link to="/">Go Home</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
