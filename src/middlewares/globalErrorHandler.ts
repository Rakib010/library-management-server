import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: error.message || "Something went wrong!",
        error: error,
        errors: error.errors || null, // for mongoose validation
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
};