import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Posts from './features/posts/Posts';

function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <Container>
        <main>
          <Posts />
        </main>
      </Container>
    </>
  );
}

export default App;
