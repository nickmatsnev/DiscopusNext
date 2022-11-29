import * as React from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react'

type University = {
uuid: number,
name: string
}


export default function Unis() {
    
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true)
    fetch('/express/api/unis/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  const initUni: University = {uuid:1,name:"noname"}
  const rows: Array<University> = (data == null ? [initUni] : data);
  return (
    <TableContainer mt={"100px"}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Thead>
          <Tr>
            <Td>Номер</Td>
            <Td align="right">ЮЮИД</Td>
            <Td align="right">Название университета</Td>
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
              <Td align="right">{row.uuid}</Td>
              <Td align="right">{row.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}