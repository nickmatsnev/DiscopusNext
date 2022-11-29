import * as React from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react'
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
    <TableContainer mt={"100px"}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <Thead>
          <Tr>
            <Td>Компания шапка</Td>
            <Td align="right">Название</Td>
            <Td align="right">Теги</Td>
            <Td align="right">Описание</Td>
            <Td align="right">Email</Td>
            <Td align="right">Номер телефона</Td>
            <Td align="right">Адрес</Td>
            <Td align="right">Город</Td>
            <Td align="right">Страна</Td>
            <Td align="right">zip код</Td>
            <Td align="right">linkedin</Td>
            <Td align="right">facebook</Td>
            <Td align="right">twitter</Td>
            <Td align="right">youtube</Td>
            <Td align="right">instagram</Td>
            <Td align="right">website</Td>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((CompanyDto) => (
            <Tr
              key={CompanyDto.name}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <Td scope="row">
                {CompanyDto.name}
              </Td>
              <Td align="right">{CompanyDto.tags.join(", ")}</Td>
              <Td align="right">{CompanyDto.cv_desc}</Td>
              <Td align="right">{CompanyDto.contacts.email}</Td>
              <Td align="right">{CompanyDto.contacts.phone}</Td>
              <Td align="right">{CompanyDto.contacts.address}</Td>
              <Td align="right">{CompanyDto.contacts.city}</Td>
              <Td align="right">{CompanyDto.contacts.country}</Td>
              <Td align="right">{CompanyDto.contacts.zip}</Td>
              <Td align="right">{CompanyDto.contacts.social_media?.linkedin}</Td>
              <Td align="right">{CompanyDto.contacts.social_media?.facebook}</Td>
              <Td align="right">{CompanyDto.contacts.social_media?.twitter}</Td>
              <Td align="right">{CompanyDto.contacts.social_media?.youtube}</Td>
              <Td align="right">{CompanyDto.contacts.social_media?.instagram}</Td>
              <Td align="right">{CompanyDto.contacts.social_media?.website}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}