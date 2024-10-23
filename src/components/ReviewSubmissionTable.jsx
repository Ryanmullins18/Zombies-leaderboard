import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom"
import mockData from "../assets/mockdata/mockReviewSubmissionTableData.json"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.error.dark,
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.error.light,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ReviewSubmissionTable() {
    let navigate=useNavigate()

  return (
    <div>
      <h1>Admin Review Submission Table</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 850 }} aria-label="submissions table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Submitter</StyledTableCell>
              <StyledTableCell align="center">Game</StyledTableCell>
              <StyledTableCell align="center">Map</StyledTableCell>
              <StyledTableCell align="center">Challenge</StyledTableCell>
              <StyledTableCell align="center">Submission ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((row) => (
              <StyledTableRow hover key={row.submissionId} onClick={() => navigate(`/review/${row.submissionId}`)}>
                <StyledTableCell align="center">{row.submitter}</StyledTableCell>
                <StyledTableCell align="center">{row.game}</StyledTableCell>
                <StyledTableCell align="center">{row.map}</StyledTableCell>
                <StyledTableCell align="center">{row.challenge}</StyledTableCell>
                <StyledTableCell align="center">{row.submissionId}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default ReviewSubmissionTable;