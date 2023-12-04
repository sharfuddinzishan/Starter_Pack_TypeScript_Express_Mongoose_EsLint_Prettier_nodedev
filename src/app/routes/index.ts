import { Router } from 'express'
import { StudentRouters } from '../modules/student/student.router'
import { UserRouters } from '../modules/user/user.router'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouters
  },
  {
    path: '/students',
    route: StudentRouters
  }
]
moduleRoutes.forEach((getRoute) => router.use(getRoute.path, getRoute.route))

export default router
