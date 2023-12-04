/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../../utill/sendResponse'
import httpStatus from 'http-status'

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getStudents()
    if (result.length) {
      sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Students Data Retrieved Successfully',
        data: result
      })
    } else {
      sendResponse(res, {
        success: false,
        statusCode: httpStatus.NOT_FOUND,
        message: 'Students Data Retrieved Failed',
        data: []
      })
    }
  } catch (error) {
    next(error)
  }
}
export const StudentControllers = { getStudents }
