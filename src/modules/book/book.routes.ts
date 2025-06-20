import { Router } from "express";
import { createBook, deleteBook, getBook, getBookById, updateBook } from "./book.controller";


const booksRoute = Router()

booksRoute.post('/api/books', createBook)
booksRoute.get('/api/books', getBook)
booksRoute.get('/api/books/:bookId', getBookById)
booksRoute.patch('/api/books/:bookId', updateBook)
booksRoute.delete('/api/books/:bookId', deleteBook)




export default booksRoute