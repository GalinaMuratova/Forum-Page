import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <Typography component='h2' variant="h4">Форум любителей оливок</Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;