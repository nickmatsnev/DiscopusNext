import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CompanyDto} from "./DTO";


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
  const data: CompanyDto[] = [{
    name: "name",
    tags: ["bug", "easy"],
    cv_desc: "description",
    contacts: {
      email: "a@a.com",
      phone: "+1234567890",
      address: "address",
      city: "Moscow",
      country: "Russia",
      zip: "12345",
      social_media: {
        linkedin: "linkedin",
        facebook: "facebook",
        twitter: "twitter",
        youtube: "youtube",
        instagram: "instagram",
        website: "website",
      },
    },
  }]


  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Компания шапка</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Теги</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Номер телефона</TableCell>
            <TableCell align="right">Адрес</TableCell>
            <TableCell align="right">Город</TableCell>
            <TableCell align="right">Страна</TableCell>
            <TableCell align="right">zip код</TableCell>
            <TableCell align="right">linkedin</TableCell>
            <TableCell align="right">facebook</TableCell>
            <TableCell align="right">twitter</TableCell>
            <TableCell align="right">youtube</TableCell>
            <TableCell align="right">instagram</TableCell>
            <TableCell align="right">website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((CompanyDto) => (
            <TableRow
              key={CompanyDto.name}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {CompanyDto.name}
              </TableCell>
              <TableCell align="right">{CompanyDto.tags.join(", ")}</TableCell>
              <TableCell align="right">{CompanyDto.cv_desc}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.email}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.phone}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.address}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.city}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.country}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.zip}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.social_media?.linkedin}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.social_media?.facebook}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.social_media?.twitter}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.social_media?.youtube}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.social_media?.instagram}</TableCell>
              <TableCell align="right">{CompanyDto.contacts.social_media?.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}