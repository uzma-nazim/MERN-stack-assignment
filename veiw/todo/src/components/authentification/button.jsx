import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {  useSelector } from "react-redux";

export default function AppButtons({buttonTex ,onclick}) {
  let {USER_DATA_LOADING ,USER_DATA} = useSelector(state=> state.signupReducer)
  console.log(USER_DATA_LOADING);
  return (
    <Stack spacing={2} direction="row">

      <Button style={{width:"100%"} } onClick={onclick} variant="contained">{USER_DATA_LOADING?"Loading...": buttonTex}</Button>
      
    </Stack>
  );
}
