import { Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCreateUser } from '../../hooks/useCreateUser';
import Auth from './Auth';
const Signup = () => {
  const [createUser] = useCreateUser();
  return (
    <Auth
      submitLabel='Signup'
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to={'login'} style={{ alignSelf: 'center' }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
