"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// Middleware
app.use((0, cors_1.default)());
const logger = (req, res, next) => {
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Get Data For Site');
});
app.all('**', (req, res) => {
    res.status(400).json({
        message: 'Unauthorized Action',
        success: false,
    });
});
exports.default = app;
