import * as React from 'react';
import { Box, Toolbar, AppBar, Typography, Stack, Button, IconButton } from '@mui/material';
import * as Icons from '@mui/icons-material';


export default function Layout(props: any) {
      const { children } = props;
      return (
            <Stack direction='column' sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
                  <AppBar position="static">
                        <Toolbar>
                              <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                              >
                                    <Icons.Menu />
                              </IconButton>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Turborepo tricks example
                              </Typography>
                        </Toolbar>
                  </AppBar>
                  <Box sx={{ width: '100%', height: '100%' }}>
                        {children}
                  </Box>
            </Stack>
      );
}