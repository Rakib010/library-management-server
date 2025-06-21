import { NextFunction, Request, Response } from "express";
import { Book } from "./book.model";


//Create Book 
const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        const data = await Book.create(body)

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data
        });

    } catch (error: any) {
        next(error)
    }
}

//Get All Books 
const getBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filter, sort, limit, sortBy } = req.query

        const doFilter = filter ? { genre: filter } : {}
        const sortOrder = sort === 'asc' ? 1 : -1

        const data = await Book.find(doFilter).sort({ [sortBy as string]: sortOrder }).limit(Number(limit || 10))

        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data
        });

    } catch (error: any) {
        next(error)

    }
}

// Get Book by ID
const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId
        const data = await Book.findById(bookId)

        res.status(201).json({
            success: true,
            message: "Book retrieve successfully",
            data
        });

    } catch (error: any) {
        next(error)

    }
}

// Update Book
const updateBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bookId = req.params.bookId
        const updatedBody = req.body

        if (!updatedBody || Object.keys(updatedBody).length === 0) {
            throw new Error('No data provided for update')
        }

        const data = await Book.findByIdAndUpdate(bookId, updatedBody, { new: true, runValidators: true })

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data
        });

    } catch (error: any) {
        next(error)

    }
}

// Delete Book
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId
        const data = await Book.findByIdAndDelete(bookId)

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null
        });

    } catch (error: any) {
        next(error)

    }
}



export { createBook, getBook, getBookById, updateBookById, deleteBook }