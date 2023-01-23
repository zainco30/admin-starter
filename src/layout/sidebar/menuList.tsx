import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';

const menuList = [
  {
    text: 'Dashboar',
    link: '/',
    icon: () => <DashboardIcon />,
  },
  {
    text: 'Users',
    link: 'users',
    icon: () => <GroupIcon />,
  },
];

export default menuList;
