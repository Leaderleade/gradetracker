import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
 


const useStyles = makeStyles((theme)=> ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width:'25ch',
        },
    },
}));
export default function CreateStudent() {
    const classes = useStyles();
// change 
    const [student, setStudent] = useState({
        regNo: 0,
        studentName: '',
        grade:'',
        section: ''
    });

    const createStudent = () => {
        axios.post('http://localhost:5000/student',student)
    }
  return (
      <>
      {/* change */}
      <h2> Create Grades</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     {/* change */}
      <TextField id="outlined-basic" label="Grade" variant="outlined"  value= {student.regNo} onChange= {(event)=> {
          setStudent({ ...student, regNo: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Course Name" variant="outlined" value= {student.studentName} onChange= {(event)=> {
          setStudent({ ...student, studentName: event.target.value})
      }}/>

      <TextField id="outlined-basic" label="Type" variant="outlined" value= {student.grade} onChange= {(event)=> {
          setStudent({ ...student, grade: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Date" variant="outlined" value= {student.section}onChange= {(event)=> {
          setStudent({ ...student, section: event.target.value})
      }}/>

      <Button variant="contained" onClick = {createStudent }> Create</Button>
    </Box>
    </>
  );
}
//  feeling all good!