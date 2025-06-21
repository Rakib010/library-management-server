import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
        message: error.message,
        success: false,
        error: error,
        errors: error.errors || null,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
};