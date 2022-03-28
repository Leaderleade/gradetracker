import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Grade, Course, Type, Date) {
  return { Grade, Course, Type, Date };
}

const rows = [
  createData(100, "Computer Algorithm", "Assignment 3", "3/25/2022"),
  createData(94, "Computer Algorithm", "Midterm Exam", "3/09/2022"),
  createData(89, "Calculas Two", "Assignment 8", "3/18/2022"),
  createData(88, "Statics", "Test 2", "3/23/2022"),
  createData(91, "Circuit", "Lab 7", "3/22/2022"),
];

export default function BasicTable() {
  return (
      <>
      {/* change */}
      <h2> Track Grades</h2> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Grade</TableCell>
            {/* <TableCell align="right">Grade</TableCell> */}
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Type&nbsp;</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Grade}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Grade}
              </TableCell>
              {/* <TableCell align="right">{row.Grade}</TableCell> */}
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
