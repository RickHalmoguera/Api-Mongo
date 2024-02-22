"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || '';
const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader)
        return res.status(401).json({ error: true, message: 'No auth header present' });
    const token = authHeader.split('Bearer ')[1];
    try {
        console.log(token);
        console.log(JWT_SECRET);
        const tokenData = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        next();
    }
    catch (e) {
        console.error('JWT Verification Error:', e);
        return res.status(401).json({ error: true, message: 'Not authorized' });
    }
};
exports.authMiddleware = authMiddleware;
