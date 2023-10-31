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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const prismaClient_1 = require("../databases/prismaClient");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { authorization } = request.headers;
    // console.log('123')
    // console.log(authorization)
    if (!authorization) {
        return response.json({
            status: false,
            error: "não autorizado"
        });
    }
    const token = authorization.split(' ')[1];
    console.log(token);
    try {
        const { id, permissions, roles } = jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : ""); //verifica o token
        console.log(id, permissions, roles);
        request.user = {
            id,
            permissions,
            roles,
        };
        const usuario = yield prismaClient_1.prismaClient.user.findUnique({
            where: { id: Number(request.user.id) },
        });
        if (!usuario) {
            return response.status(404).json({ message: 'Token inválido' });
        }
        if (usuario.ban) {
            return response.status(403).json({ message: 'Usuário banido.' });
        }
        next(); //vai dizer que está tudo certo e vai prosseguir a função
    }
    catch (error) {
        return response.json({ status: false, message: 'Failed to authenticate token.', error });
    }
});
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map