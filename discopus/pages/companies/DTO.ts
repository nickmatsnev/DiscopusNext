
// export type CompanyDto = {
//   title: string,
//   description: string,
//   tags: string[],
//   importance: Importance,
//   status: string,
//   timeStart: string,
//   timeEnd: string,
//   studentIDs: string[],
//   dueDateBySLA: string,
// }

export type CompanyDto = {
  name: string,
  tags: string[],
  cv_desc: string,
  contacts: {
    email: string,
    phone: string,
    address: string,
    city: string,
    country: string,
    zip: string,
    social_media?: {
      linkedin?: string,
      facebook?: string,
      twitter?: string,
      youtube?: string,
      instagram?: string,
      website?: string,
    },
  },
}