import {useLocation, useNavigate} from 'react-router-dom';

export const withRouter = (Component: any) => {
  //TODO: fixing types
  const Wrapper = (props: JSX.IntrinsicAttributes) => {
    const navigate = useNavigate();
    const location = useLocation();

    return <Component location={location} navigate={navigate} {...props} />;
  };

  return Wrapper;
};
