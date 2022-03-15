import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { closeModal, selectModal } from '@store/app.slice';
import { useDispatch, useSelector } from 'react-redux';
import { NextButton, NoButton } from '../buttons';

export default function DialogModal() {
  const modal = useSelector(selectModal());
  const dispatch = useDispatch();

  return (
    <Dialog
      sx={{ textAlign: [null, 'center'], height: 'fit-content', m: 'auto' }}
      fullWidth
      maxWidth="sm"
      open={modal.open}
      onClose={() => dispatch(closeModal())}
      aria-labelledby={modal.title}
      aria-describedby={modal.description}
    >
      <DialogContent sx={{ px: ['16px', '24px'] }}>
        {modal.title && <DialogTitle>{modal.title}</DialogTitle>}
        {modal.description && <DialogContentText mt="8px">{modal.description}</DialogContentText>}
        {modal.content}
        <DialogActions
          sx={{
            width: '100%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: ['8px', '48px'],
            mt: ['24px', '48px'],
          }}
        >
          <NextButton
            onClick={() => {
              modal.onClickYes?.();
              dispatch(closeModal());
            }}
          >
            {modal.yesLabel}
          </NextButton>
          {!modal.yesButtonOnly && (
            <NoButton
              onClick={() => {
                modal.onClickNo?.();
                dispatch(closeModal());
              }}
            >
              {modal.noLabel}
            </NoButton>
          )}
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
