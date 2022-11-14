import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

enum Importance {
    Low = 0,
    Medium = 1,
    High = 2
  }
export type TaskDto = {
    title: string,
    description: string,
    tags: string[],
    importance: Importance,
    status: string,
    timeStart: string,
    timeEnd: string,
    studentIDs: string[],
    SLA: string,
  }
function createData(
    title: string,
    description: string,
    tags: string[],
    importance: Importance,
    status: string,
    timeStart: string,
    timeEnd: string,
    studentIDs: string[],
    SLA: string,
) {
  return { title, 
    description, 
    tags, 
    importance, 
    status,
     timeStart, 
     timeEnd, 
     studentIDs,
     SLA};
}
function AllTasks() {
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
    const data:TaskDto[] = [{
        title: "title",
        description: "description",
        tags: ["bug", "easy"],
        importance: 2,
        status: "solved",
        timeStart: "11/22/2022",
        timeEnd: "11/23/2022",
        studentIDs: ["1","2"],
        SLA: "2 hours",
      },{
        title: "title2",
        description: "description",
        tags: ["bug", "hard"],
        importance: 2,
        status: "in process",
        timeStart: "11/22/2022",
        timeEnd: "11/23/2022",
        studentIDs: ["1","2"],
        SLA: "2 hours",
      }]
    
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Таск шапка</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Сложность</TableCell>
            <TableCell align="right">Теги</TableCell>
            <TableCell align="right">Важность</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Время начала</TableCell>
            <TableCell align="right">Время конца</TableCell>
            <TableCell align="right">Айди студентов</TableCell>
            <TableCell align="right">СЛА</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((taskDto) => (
            <TableRow
              key={taskDto.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {taskDto.title}
              </TableCell>
              <TableCell align="right">{taskDto.description}</TableCell>
              <TableCell align="right">{taskDto.tags.join(", ")}</TableCell>
              <TableCell align="right">{taskDto.importance}</TableCell>
              <TableCell align="right">{taskDto.status}</TableCell>
              <TableCell align="right">{taskDto.timeStart}</TableCell>
              <TableCell align="right">{taskDto.timeEnd}</TableCell>
              <TableCell align="right">{taskDto.studentIDs.join(", ")}</TableCell>
              <TableCell align="right">{taskDto.SLA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default  AllTasks