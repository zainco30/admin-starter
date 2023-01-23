import {Link} from 'react-router-dom';
import {withRouter} from './withRouter';
import {Breadcrumbs as MUIBreadcrumbs, Link as MuiLink, Typography} from '@mui/material';

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const Breadcrumbs = (props: any) => {
  //TODO: fixing types
  const {
    navigate,
    location: {pathname, state},
  } = props;

  const pathnames = pathname.split('/').filter((x: any) => x);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {/* {pathnames.length > 0 ? (
        <MuiLink component={Link} to='/' onClick={() => navigate('/')} underline='none'>
          Home
        </MuiLink>
      ) : (
        <Typography> Home </Typography>
      )} */}
      {pathnames.map((name: string, index: number) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>
            {state && state[name] ? capitalize(state[name]) : capitalize(name)}
          </Typography>
        ) : (
          <MuiLink
            key={name}
            component={Link}
            to={routeTo}
            state={state}
            onClick={() => navigate(routeTo)}
            underline="none"
          >
            {state && state[name] ? capitalize(state[name]) : capitalize(name)}
          </MuiLink>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
