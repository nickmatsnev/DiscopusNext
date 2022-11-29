import * as React from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react'
import {TaskDto} from "./DTO";


// function createData(
//   title: string,
//   description: string,
//   tags: string[],
//   importance: Importance,
//   status: string,
//   timeStart: string,
//   timeEnd: string,
//   studentIDs: string[],
//   SLA: string,
// ) {
//   return {
//     title,
//     description,
//     tags,
//     importance,
//     status,
//     timeStart,
//     timeEnd,
//     studentIDs,
//     SLA
//   };
// }

export default function AllTasks() {
  //const [data, setData] = React.useState(null)
  //const [isLoading, setLoading] = React.useState(false)
  // когда добавите таски в скл тогда и раскомментим
  //React.useEffect(() => {
  //    setLoading(true)
  //    fetch('http://localhost:4000/api/tasks/getAll')
  //    .then((res) => res.json())
  //    .then((data) => {
  //        setData(data)
  //        setLoading(false)
  //    })
  // }, [])
  const data: TaskDto[] = [{
    title: "title",
    description: "description",
    tags: ["bug", "easy"],
    importance: 2,
    status: "solved",
    timeStart: "11/22/2022",
    timeEnd: "11/23/2022",
    studentIDs: ["1", "2"],
    dueDateBySLA: "2 hours",
  }, {
    title: "title2",
    description: "description",
    tags: ["bug", "hard"],
    importance: 2,
    status: "in process",
    timeStart: "11/22/2022",
    timeEnd: "11/23/2022",
    studentIDs: ["1", "2"],
    dueDateBySLA: "2 hours",
  }]


  return (
    <TableContainer  mt={"100px"}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <Thead>
          <Tr>
            <Td>Таск шапка</Td>
            <Td align="right">Описание</Td>
            <Td align="right">Сложность</Td>
            <Td align="right">Теги</Td>
            <Td align="right">Важность</Td>
            <Td align="right">Статус</Td>
            <Td align="right">Время начала</Td>
            <Td align="right">Время конца</Td>
            <Td align="right">Айди студентов</Td>
            <Td align="right">СЛА</Td>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((taskDto) => (
            <Tr
              key={taskDto.title}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <Td scope="row">
                {taskDto.title}
              </Td>
              <Td align="right">{taskDto.description}</Td>
              <Td align="right">{taskDto.tags.join(", ")}</Td>
              <Td align="right">{taskDto.importance}</Td>
              <Td align="right">{taskDto.status}</Td>
              <Td align="right">{taskDto.timeStart}</Td>
              <Td align="right">{taskDto.timeEnd}</Td>
              <Td align="right">{taskDto.studentIDs.join(", ")}</Td>
              <Td align="right">{taskDto.dueDateBySLA}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}