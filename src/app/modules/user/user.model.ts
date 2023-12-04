/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'
import config from '../../config/config'
import bcrypt from 'bcrypt'
// const passwordHash = require('password-hash')

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// Hash password by bycrypt
UserSchema.pre('save', async function (next) {
  let user = this
  const hash = await bcrypt.hashSync(user.password, Number(config.salt_rounds))
  // const hash = await passwordHash.generate(user.password)
  user.password = hash
  next()
})

UserSchema.post('save', function (docs, next) {
  docs.password = ''
  next()
})

export const User = model<TUser>('User', UserSchema)
