"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = config_1.default.env === 'development' ? error.message : 'something went wrong';
    const errorName = config_1.default.env === 'development' && error.name;
    if (config_1.default.env === 'development') {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            statusCode = 400;
            const lines = error.message.trim().split('\n');
            message = lines[lines.length - 1];
        }
        else if (error instanceof client_1.Prisma.PrismaClientValidationError) {
            statusCode = 400;
            const lines = error.message.trim().split('\n');
            message = lines[lines.length - 1];
        }
        else if (error instanceof Error) {
            statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
            message = error.message;
        }
        else if (error instanceof ApiError_1.default) {
            statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
            message = error.message;
        }
    }
    res.status(statusCode).json({
        errorName,
        success: false,
        message,
        // stack: error.stack,
    });
};
exports.globalErrorHandler = globalErrorHandler;
