import { Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import Auth from './Auth';

const Login = () => {
  const { login } = useLogin();
  return (
    <Auth submitLabel='Login' onSubmit={request => login(request)}>
      <Link to={'/signup'} style={{ alignSelf: 'center' }}>
        <MUILink>Signup</MUILink>
      </Link>
    </Auth>
  );
};

export default Login;
