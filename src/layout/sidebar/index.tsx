import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DrawerHeader from 'layout/DrawerHeader';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {drawerWidth} from 'utils/constants';
import SidebarMenu from './SidebarMenu';

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const SideBar = ({open, handleDrawerClose}: {open: boolean; handleDrawerClose: any}) => {
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box display="flex" justifyContent="space-between" alignContent="center">
          {open && (
            <Box display="flex" justifyContent="space-around" alignContent="center">
              <img alt={'Logo'} src={`/logo512.png`} style={{maxWidth: '20%'}} />
              {/* <Avatar alt={''} src={''} sx={{width: 40, height: 40, ml: 8, mt: 1, mb: 1}} /> */}
              <Typography fontWeight={500} fontSize="16px" sx={{alignSelf: 'center'}}>
                {'username'}
              </Typography>
            </Box>
          )}
          <Box display="flex">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        </Box>
      </DrawerHeader>
      <Divider />
      <SidebarMenu open={open} />
    </Drawer>
  );
};

export default SideBar;
