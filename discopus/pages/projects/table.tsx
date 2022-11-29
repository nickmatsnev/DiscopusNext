import * as React from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react'
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

  <TableContainer mt={"100px"}>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Компания</Th>
        <Th>Название проекта</Th>
        <Th>Сложность</Th>
        <Th>Численность команды</Th>
        <Th>Тема</Th>
      </Tr>
    </Thead>
    <Tbody>
        {rows.map((row) => (
          <Tr
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <Td scope="row">
              {row.name}
            </Td>
            <Td align="right">{row.calories}</Td>
            <Td align="right">{row.fat}</Td>
            <Td align="right">{row.carbs}</Td>
            <Td align="right">{row.protein}</Td>
          </Tr>
        ))}
    </Tbody>
  </Table>
</TableContainer>


    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Компания</TableCell>
    //         <TableCell align="right">Название проекта</TableCell>
    //         <TableCell align="right">Сложность</TableCell>
    //         <TableCell align="right">Численность команды</TableCell>
    //         <TableCell align="right">тема</TableCell>
    //       </TableRow>
    //     </TableHead>
        // <TableBody>
        //   {rows.map((row) => (
        //     <TableRow
        //       key={row.name}
        //       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //     >
        //       <TableCell component="th" scope="row">
        //         {row.name}
        //       </TableCell>
        //       <TableCell align="right">{row.calories}</TableCell>
        //       <TableCell align="right">{row.fat}</TableCell>
        //       <TableCell align="right">{row.carbs}</TableCell>
        //       <TableCell align="right">{row.protein}</TableCell>
        //     </TableRow>
        //   ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}