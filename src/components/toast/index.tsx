import {useEffect, useState} from 'react';
import {Alert, AlertColor, Snackbar} from '@mui/material';
// import { useReactiveVar } from '@apollo/client';
// import { toastMessage } from 'gql/cache';

const messageSource = {
  message: 'error message',
  type: 'error',
};
const Toast = () => {
  const [open, setOpen] = useState(false);
  // const toast = useReactiveVar(toastMessage);
  const toast = messageSource;
  const toastCloseTime = 6000;

  useEffect(() => {
    if (toast?.message) {
      setOpen(true);
    }
    const timer = setTimeout(() => {
      setOpen(false);
    }, toastCloseTime);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleClose = () => {
    setOpen(false);
  };

  if (!toast) {
    return null;
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      autoHideDuration={toastCloseTime}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={(toast?.type as AlertColor) ?? 'error'}
        sx={{width: '100%'}}
      >
        {toast?.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
