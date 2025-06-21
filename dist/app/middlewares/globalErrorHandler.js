"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        message: error.message,
        success: false,
        error: error,
        errors: error.errors || null,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
};
exports.globalErrorHandler = globalErrorHandler;
