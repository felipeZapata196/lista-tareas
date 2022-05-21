import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const  InputDate= (props) =>{
  
  return (
    <LocalizationProvider 
    dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Task completion"
        value={props.value}
        onChange={(date) => {
          props.handleDate(date);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
