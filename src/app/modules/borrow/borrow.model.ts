import { Model, model, Schema, Types } from "mongoose";
import { BorrowMethods, IBorrow } from "./borrow.interface";
import { Book } from "../book/book.model";


export const borrowSchema = new Schema<IBorrow, BorrowMethods>({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be a positive number"],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number"
        }
    },
    dueDate: { type: Date, required: true }
}, {
    versionKey: false,
    timestamps: true
})

// static method 
borrowSchema.static('CheckCopies', async function (bookId: string, quantity: number) {
    const book = await Book.findById(bookId);
    if (!book) throw new Error('BookId not found')

    if (book.copies < quantity) throw new Error("Not enough copies available")

    const available = book.copies - quantity

    if (available === 0) {
        book.available = false
    }
    await book.save()
});

// 



export const Borrow = model<IBorrow, BorrowMethods>("Borrow", borrowSchema)


