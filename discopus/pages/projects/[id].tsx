import * as React from 'react';
import Product from '../../components/cards/Product';
import { GetStaticPaths } from 'next';
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
const singleProjectQuery = `*[_type == "project" && _id == $id] {
  _id,
  company_id,
  "stud_ids": [
    {
      "stud_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "name": "Vasia",
      "surname": "Pupkin",
      "university_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "project_ids": [
        "math,science,hope"
      ],
      "cv_file": "location/of/the/file",
      "cv_desc": "text",
      "tags": [
        "math science hope"
      ],
      "username": "username",
      "hash_password": "string",
      "email": "user@example.com",
      "phone": "+123456789",
      "linkedid": "linkedid",
      "github": "github",
      "website": "website",
      "photo": "photo",
      "status": "status",
      "last_login": "lastlogin",
      "last_update": "LastUpdate"
    }
  ],
  "university_ids": [
    {
      "university_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "project_ids": [
        "math,science,hope"
      ],
      "stud_ids": [
        {
          "stud_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "name": "Vasia",
          "surname": "Pupkin",
          "university_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "project_ids": [
            "math,science,hope"
          ],
          "cv_file": "location/of/the/file",
          "cv_desc": "text",
          "tags": [
            "math science hope"
          ],
          "username": "username",
          "hash_password": "string",
          "email": "user@example.com",
          "phone": "+123456789",
          "linkedid": "linkedid",
          "github": "github",
          "website": "website",
          "photo": "photo",
          "status": "status",
          "last_login": "lastlogin",
          "last_update": "LastUpdate"
        }
      ],
      "hash_password": "string",
      "email": "user@example.com",
      "username": "username"
    }
  ],
  "task_ids": [
    {
      "task_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "stud_ids": [
        {
          "stud_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "name": "Vasia",
          "surname": "Pupkin",
          "university_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "project_ids": [
            "math,science,hope"
          ],
          "cv_file": "location/of/the/file",
          "cv_desc": "text",
          "tags": [
            "math science hope"
          ],
          "username": "username",
          "hash_password": "string",
          "email": "user@example.com",
          "phone": "+123456789",
          "linkedid": "linkedid",
          "github": "github",
          "website": "website",
          "photo": "photo",
          "status": "status",
          "last_login": "lastlogin",
          "last_update": "LastUpdate"
        }
      ],
      "desc": "text",
      "role": "text",
      "importance": "10/10",
      "SLA": "text",
      "stage": "finish",
      "time_start": "date 1",
      "time_end": "date 2"
    }
  ],
  "desc": "text",
  "admin_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "stage": "finish",
  "time_start": "date 1",
  "time_end": "date 2"
  }
}
`;


export default function ProjectGrid() {
  return (
            <Product/> // here we will pass the props to the product where it will bep represented properly
  );
}
export const getStaticProps = async ({ }) => {
  // here we will get the project
  //return { props: { product } };
};