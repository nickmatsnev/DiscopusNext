type ProjectDto = {
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  status: string,
  tags: string[],
  ownerId: string,
  studentIDs: string[],
  companyID: string,
  // university
  taskIDs: string[],
}

export default ProjectDto;