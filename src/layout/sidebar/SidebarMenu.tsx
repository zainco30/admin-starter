import {Link as RouterLink} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import menuList from './menuList';

const SidebarMenu = ({open}: {open: boolean}) => {
  return (
    <List>
      {menuList.map((menu, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={{display: 'block'}}
          component={RouterLink as any}
          to={menu.link}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <menu.icon />
            </ListItemIcon>
            <ListItemText primary={menu.text} sx={{opacity: open ? 1 : 0}} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarMenu;
