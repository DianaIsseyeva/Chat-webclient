import { Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Login = () => (
  <Auth submitLabel='Login' onSubmit={async () => {}}>
    <Link to={'signup'} style={{ alignSelf: 'center' }}>
      <MUILink>Signup</MUILink>
    </Link>
  </Auth>
);

export default Login;
