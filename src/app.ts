import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { dbconnect } from './utill/dbconnect'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'

const app: Application = express()

// Parser
app.use(express.json())
app.use(express.text())

// Middleware
app.use(cors())

// Database Connect
dbconnect()

const logger = (req: Request, res: Response, next: NextFunction) => {
  next()
}

// Application Routes
app.use('/api/v1', router)

app.get('/', logger, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Site Works Fine Now'
  })
})

app.all('**', (req: Request, res: Response) => {
  res.status(400).json({
    message: 'Unauthorized Action',
    success: false
  })
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
