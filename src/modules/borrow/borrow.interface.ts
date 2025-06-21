import { Date, Model, Types } from "mongoose";

export interface IBorrow {
    book: Types.ObjectId,
    quantity: number,
    dueDate: Date
}

export interface BorrowMethods extends Model<IBorrow> {
    CheckCopies(bookId: string, quantity: number): Promise<any>
}

