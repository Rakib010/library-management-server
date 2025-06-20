import { NextFunction, Request, Response } from "express";
import { Borrow } from "./borrow.model";


// Post Borrow a Book
const borrowBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        const data = await Borrow.create(body)

        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data
        });

    } catch (error: any) {
        next(error)

    }
}

export { borrowBook }