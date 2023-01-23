import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';

const iconList = [
  {
    toolTipTitle: 'Notifications',
    icon: () => <NotificationsNoneIcon />,
    actionFunction: () => {
      console.log('notification logs');
    },
  },
  {
    toolTipTitle: 'Logout',
    icon: () => <LogoutIcon />,
    actionFunction: () => {
      console.log('LogoutIcon logs');
    },
  },
];

export default iconList;
