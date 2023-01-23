import {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header';
import SideBar from './sidebar';
import DrawerHeader from './DrawerHeader';
import Breadcrumbs from 'components/breadCrumb';

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
      <Box
        component="main"
        flexDirection="column"
        justifyContent="space-between"
        flexGrow={1}
        padding={1}
        margin={1}
      >
        <DrawerHeader />
        <Box display="flex">
          <Breadcrumbs />
        </Box>
        <Box display="flex">{children}</Box>
      </Box>
    </Box>
  );
}
