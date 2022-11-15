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
  dueDateBySLA: string,
}