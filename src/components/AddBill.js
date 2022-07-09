import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { url } from '../config';

export default function AddBill() {
  const [state, setState] = useState({
    billdate: '',
    paiddate: '',
    unitconsumed: '',
    amount: '',
  });
  const handleSubmit = () => {
    let res = axios.post(url + '/addbill', { ...state });
  };

  return (
    <>
      <Typography variant='h3'>Add Bill</Typography>
      <Grid container xl={12}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            onChange={(e) => setState({ ...state, billdate: e.target.value })}
            id='outlined-basic'
            //   label='billdate'
            type='date'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type='date'
            onChange={(e) => setState({ ...state, paiddate: e.target.value })}
            id='outlined-basic'
            //   label='paiddate'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
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
            onChange={(e) => setState({ ...state, amount: e.target.value })}
            id='outlined-basic'
            label='amount'
            variant='outlined'
          />
        </Grid>
        <Grid sx={{ textAlign: 'center' }} padding={3} item xs={12}>
          <Button variant='contained' onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
