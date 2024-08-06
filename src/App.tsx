import { ApolloProvider } from '@apollo/client';
import { Container, CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes';
import Guard from './components/auth/Guard';
import ChatList from './components/chat-list/ChatList';
import Header from './components/header/Header';
import Snackbar from './components/snackbar/Snackbar';
import client from './constants/apollo-client';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item md={3}>
          <ChatList />
        </Grid>
        <Grid item md={9}>
          <Container>
            <Guard>
              <RouterProvider router={router} />
            </Guard>
          </Container>
        </Grid>
      </Grid>

      <Snackbar />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
