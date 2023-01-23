import {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header';
import SideBar from './sidebar';
import DrawerHeader from './DrawerHeader';

export default function Layout({children}: {children: any}) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
