"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrow = exports.borrowSchema = void 0;
const mongoose_1 = require("mongoose");
const book_model_1 = require("../book/book.model");
exports.borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
// static method 
exports.borrowSchema.static('CheckCopies', function (bookId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield book_model_1.Book.findById(bookId);
        if (!book)
            throw new Error('BookId not found');
        if (book.copies < quantity)
            throw new Error("Not enough copies available");
        const available = book.copies - quantity;
        if (available === 0) {
            book.available = false;
        }
        yield book.save();
    });
});
// 
exports.Borrow = (0, mongoose_1.model)("Borrow", exports.borrowSchema);
