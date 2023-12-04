/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { UserServices } from './user.service'
import sendResponse from '../../../utill/sendResponse'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body
    const result = await UserServices.createStudentToDb(studentData, password)
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const UserControllers = {
  createStudent
}
