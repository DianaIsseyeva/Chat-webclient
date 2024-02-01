import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => (
  <ThemeProvider theme={{ darkTheme }}>
    <CssBaseline />
    <Container>
      <h1>Dark mode</h1>
    </Container>
  </ThemeProvider>
);

export default App;
