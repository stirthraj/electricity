import logo from './logo.svg';
import './App.css';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddBill from './components/AddBill';
import { url } from './config';
import axios from 'axios';
import BasicTable from './components/BasicTable';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setpage] = useState(0);
  useEffect(() => {
    async function fetchApi() {
      // let res = await axios(url + '/all');
      // pagination
      let res = await axios(url + '/paginationsort?page=' + page);
      setState(res.data.response);
    }
    fetchApi();
  }, [loading, page]);
  return (
    <Container ddisableGutters maxWidth='xl'>
      <Typography variant='h3'>Electricity Bill</Typography>
      <Grid xs={12}>
        {page > 0 ? (
          <Button variant='contained' onClick={() => setpage(page + 1)}>
            Prev
          </Button>
        ) : null}
        <Button variant='contained' onClick={() => setpage(page + 1)}>
          Next
        </Button>
      </Grid>
      <BasicTable setpage={setpage} setLoading={setLoading} tableData={state} />
      <AddBill />
    </Container>
  );
}

export default App;
