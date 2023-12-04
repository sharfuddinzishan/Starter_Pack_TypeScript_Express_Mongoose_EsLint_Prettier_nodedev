/* eslint-disable no-console */
import { Student } from './student.model'

const getStudents = async () => {
  const result = await Student.find()
  return result
}

export const StudentServices = {
  getStudents
}
