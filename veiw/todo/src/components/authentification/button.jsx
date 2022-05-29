import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {  useSelector } from "react-redux";

export default function AppButtons({buttonTex ,onclick ,data}) {
  
  return (
    <Stack spacing={2} direction="row">

      <Button style={{width:"100%"} } onClick={onclick} variant="contained">{!data?"Loading...": buttonTex}</Button>
      
    </Stack>
  );
}
