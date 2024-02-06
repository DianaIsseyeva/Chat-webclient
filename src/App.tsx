import { ApolloProvider } from '@apollo/client';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes';
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
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
