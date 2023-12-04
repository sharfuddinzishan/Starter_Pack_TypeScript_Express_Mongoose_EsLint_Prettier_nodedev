/* eslint-disable no-console */
import config from '../../config/config'
import { TStudent } from '../student/student.interface'
import { User } from './user.model'
import { TUser } from './user.interface'
import { Student } from '../student/student.model'

const createStudentToDb = async (student: TStudent, password: string) => {
  const user: Partial<TUser> = {}
  user.password = password || (config.defaultStudentPass as string)
  user.role = 'student'
  user.id = (new Date().getFullYear() + Math.random() * 10).toString()
  const newUser = await User.create(user)
  if (Object.keys(newUser).length) {
    student.id = newUser.id
    student.user = newUser._id
  }
  const newStudent = await Student.create(student)
  return newStudent
}

export const UserServices = {
  createStudentToDb
}
