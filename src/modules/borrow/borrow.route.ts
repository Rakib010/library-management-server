import { Router } from "express"
import { borrowBook } from "./borrow.controller"


const borrowRoute = Router()

borrowRoute.post('/api/borrow', borrowBook)
//borrowRoute.get('/api/borrow')



export default borrowRoute