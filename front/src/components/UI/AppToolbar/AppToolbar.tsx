import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Container>
        <Toolbar>
          <Typography variant="h4" component="div" style={{margin:'20px 0 20px 0'}} sx={{ flexGrow: 1 }}>
            <Typography component='h2' variant="h4">Olive and Pineapple Pizza Lovers Forum</Typography>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppToolbar;