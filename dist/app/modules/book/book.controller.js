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
exports.deleteBook = exports.updateBookById = exports.getBookById = exports.getBook = exports.createBook = void 0;
const book_model_1 = require("./book.model");
//Create Book 
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const data = yield book_model_1.Book.create(body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createBook = createBook;
//Get All Books 
const getBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sort, limit, sortBy } = req.query;
        const doFilter = filter ? { genre: filter } : {};
        const sortOrder = sort === 'asc' ? 1 : -1;
        const data = yield book_model_1.Book.find(doFilter).sort({ [sortBy]: sortOrder }).limit(Number(limit || 10));
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getBook = getBook;
// Get Book by ID
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.Book.findById(bookId);
        res.status(201).json({
            success: true,
            message: "Book retrieve successfully",
            data
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getBookById = getBookById;
// Update Book
const updateBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const updatedBody = req.body;
        if (!updatedBody || Object.keys(updatedBody).length === 0) {
            throw new Error('No data provided for update');
        }
        const data = yield book_model_1.Book.findByIdAndUpdate(bookId, updatedBody, { new: true, runValidators: true });
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateBookById = updateBookById;
// Delete Book
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.Book.findByIdAndDelete(bookId);
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteBook = deleteBook;
