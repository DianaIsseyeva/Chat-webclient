import { Link as MUILink } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUser } from '../../hooks/useCreateUser';
import { extractErrormessage } from '../../utils/errors';
import Auth from './Auth';
import { useLogin } from '../../hooks/useLogin';
const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState('');
  const { login } = useLogin();
  return (
    <Auth
      submitLabel='Signup'
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
          await login({ email, password });
          setError('');
        } catch (err) {
          const errorMessage = extractErrormessage(err);
          if (errorMessage) {
            setError(errorMessage);
            return;
          } else {
            setError('Unknown error occured');
          }
        }
      }}
    >
      <Link to={'/login'} style={{ alignSelf: 'center' }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
