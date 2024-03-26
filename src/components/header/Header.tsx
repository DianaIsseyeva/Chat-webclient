import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Branding from './Branding';
import Navigation from './Navigation';
import Settings from './Settings';
import MobileBranding from './mobile/MobileBranding';
import MobileNavigation from './mobile/MobileNavigation';

const pages: string[] = [];

const Header = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Branding />
          <MobileNavigation pages={pages} />
          <MobileBranding />
          <Navigation pages={pages} />
          <Settings />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
