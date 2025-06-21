import { Router } from "express"
import { borrowBook, getBorrowBook } from "./borrow.controller"


const borrowRoute = Router()

borrowRoute.post('/api/borrow', borrowBook)
borrowRoute.get('/api/borrow', getBorrowBook)



export default borrowRoute