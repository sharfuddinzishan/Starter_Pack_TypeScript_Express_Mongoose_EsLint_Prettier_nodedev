/* eslint-disable no-console */
import { Model, Types } from 'mongoose'

export type TStudentName = {
  firstName: string
  lastName: string
  middleName?: string
}

export type TStudent = {
  name: TStudentName
  id: string
  user: Types.ObjectId
}

// Static Method
export interface StaticStudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isExistStudentById(id: string): Promise<TStudent | null>
}
