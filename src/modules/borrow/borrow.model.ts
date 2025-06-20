import { model, Schema, Types } from "mongoose";
import { IBorrow } from "./borrow.interface";


export const borrowSchema = new Schema<IBorrow>({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be a positive whole number"]
        /* validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number"
        } */
    },
    dueDate: { type: Date, required: true }
}, {
    versionKey: false,
    timestamps: true
})

export const Borrow = model<IBorrow>("Borrow", borrowSchema)


