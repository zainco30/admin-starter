import {Fragment} from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import iconList from './iconList';

const HeaderIcons = () => {
  return (
    <Fragment>
      {iconList.map((icon, i) => (
        <Fragment key={i}>
          <Tooltip title={icon.toolTipTitle}>
            <IconButton onClick={icon.actionFunction}>{<icon.icon />}</IconButton>
          </Tooltip>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default HeaderIcons;
