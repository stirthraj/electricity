import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { Button, Grid, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  setOpen,
  state,
  setState,
  handleUpdate,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h3'>Update Bill</Typography>
          <Grid container xl={12}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                defaultValue={state?.billdate}
                onChange={(e) =>
                  setState({ ...state, billdate: e.target.value })
                }
                id='outlined-basic'
                //   label='billdate'
                type='date'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                defaultValue={state?.paiddate}
                type='date'
                onChange={(e) =>
                  setState({ ...state, paiddate: e.target.value })
                }
                id='outlined-basic'
                //   label='paiddate'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                defaultValue={state?.unitconsumed}
                onChange={(e) =>
                  setState({ ...state, unitconsumed: e.target.value })
                }
                id='outlined-basic'
                label='unitconsumed'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                defaultValue={state?.amount}
                onChange={(e) => setState({ ...state, amount: e.target.value })}
                id='outlined-basic'
                label='amount'
                variant='outlined'
              />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} padding={3} item xs={12}>
              <Button variant='contained' onClick={() => handleUpdate()}>
                Submit
              </Button>
            </Grid>
          </Grid>
          {JSON.stringify(state)}
        </Box>
      </Modal>
    </div>
  );
}
