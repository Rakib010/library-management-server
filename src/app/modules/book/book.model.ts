import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";


export const bookSchema = new Schema<IBook>({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
        type: String,
        required: true,
        enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"]
    },
    isbn: {
        type: String,
        unique: [true, "Already use this isbn"],
        required: true
    },
    description: { type: String, trim: true },
    copies: {
        type: Number,
        required: true,
        min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true,
})

export const Book = model<IBook>("Book", bookSchema)
