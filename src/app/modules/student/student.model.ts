/* eslint-disable no-console */
import { Schema, model } from 'mongoose'
import { StaticStudentModel, TStudent, TStudentName } from './student.interface'

// Sub Schema of studentSchema
const nameSchema = new Schema<TStudentName>(
  {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String }
  },
  { versionKey: false }
)

const StudentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, 'Unique Student ID Must Be Required'],
      unique: true
    },
    name: {
      type: nameSchema,
      required: [true, 'Name Must Be Provided']
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'Unique User ID Must Be Required'],
      unique: true,
      ref: 'User'
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false
  }
)

// Virtuals
StudentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
})

// Static Method
StudentSchema.statics.isExistStudentById = async function (id: string) {
  const isExist = await Student.findOne({ id })
  return isExist
}

// Student Model
export const Student = model<TStudent, StaticStudentModel>(
  'student',
  StudentSchema
)
