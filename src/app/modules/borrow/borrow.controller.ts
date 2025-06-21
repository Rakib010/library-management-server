import { NextFunction, Request, Response } from "express";
import { Borrow } from "./borrow.model";


// Post Borrow a Book
const borrowBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { bookId, quantity, dueDate } = req.body

        // instance method call
        await Borrow.CheckCopies(bookId, quantity)

        const data = await Borrow.create({
            book: bookId,
            quantity,
            dueDate,
        })

        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data
        });

    } catch (error: any) {
        next(error)

    }
}

// get Borrowed Books Summary
const getBorrowBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookDetails"
                }
            },
            {
                $unwind: "$bookDetails"
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$bookDetails.title",
                        isbn: "$bookDetails.isbn",
                    },
                    totalQuantity: 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data
        });

    } catch (error: any) {
        next(error)

    }
}


export { borrowBook, getBorrowBook }