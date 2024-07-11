import { useEffect } from 'react';
import { authenticatedVar } from '../../constants/authenticated';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../../constants/error';
import excludedRoutes from '../../constants/excluded-routes';
import { snackVar } from '../../constants/snack';
import { useGetMe } from '../../hooks/useGetMe';

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user, error } = useGetMe();
  useEffect(() => {
    if (user) {
      authenticatedVar(true);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      if (error.networkError) {
        snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      }
    }
  }, [error]);
  return <>{excludedRoutes.includes(window.location.pathname) ? children : user && children}</>;
};

export default Guard;
