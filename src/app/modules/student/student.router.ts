/* eslint-disable no-console */
import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()

router.get('/:studentId', StudentControllers.getStudents)

export const StudentRouters = router
