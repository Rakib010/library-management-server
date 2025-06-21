import { Router} from "express";
import { createBook, deleteBook, getBook, getBookById, updateBookById } from "./book.controller";


const booksRoute = Router()

booksRoute.post('/api/books', createBook)
booksRoute.get('/api/books', getBook)
booksRoute.get('/api/books/:bookId', getBookById)
booksRoute.put('/api/books/:bookId', updateBookById)
booksRoute.delete('/api/books/:bookId', deleteBook)




export default booksRoute