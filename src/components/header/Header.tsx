import { useReactiveVar } from '@apollo/client';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { authenticatedVar } from '../../constants/authenticated';
import { Page } from '../../interfaces/page.interface';
import Branding from './Branding';
import Navigation from './Navigation';
import Settings from './Settings';
import MobileBranding from './mobile/MobileBranding';
import MobileNavigation from './mobile/MobileNavigation';

const pages: Page[] = [
  {
    title: 'Home',
    path: '/',
  },
];

const unauthenticatedPages: Page[] = [
  {
    title: 'Login',
    path: '/login',
  },
  {
    title: 'Signup',
    path: '/signup',
  },
];
const Header = () => {
  const authenticated = useReactiveVar(authenticatedVar);
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Branding />
          <MobileNavigation pages={authenticated ? pages : unauthenticatedPages} />
          <MobileBranding />
          <Navigation pages={authenticated ? pages : unauthenticatedPages} />
          {authenticated && <Settings />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
