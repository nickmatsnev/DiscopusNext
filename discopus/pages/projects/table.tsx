import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import {Container, Box} from '@mui/material';
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 'science'),
  createData('Ice cream sandwich', 237, 9.0, 37, 'industry'),
  createData('Eclair', 262, 16.0, 24, 'industry'),
  createData('Cupcake', 305, 3.7, 67, 'science'),
  createData('Gingerbread', 356, 16.0, 49, 'science'),
];

export default function BasicTable() {
  return (
    <Container>
    <Header />
    <Box mt={6}
        ml={3}
        mr={3}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Компания</TableCell>
            <TableCell align="right">Название проекта</TableCell>
            <TableCell align="right">Сложность</TableCell>
            <TableCell align="right">Численность команды</TableCell>
            <TableCell align="right">тема</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <Footer/>
    </Container>
  );
}