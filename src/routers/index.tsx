import {useRoutes} from 'react-router-dom';
import routes from './urls';

const Routers = () => {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isLoggedIn = true;
  return useRoutes(routes(isLoggedIn));
};

export default Routers;
