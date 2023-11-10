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
exports.proprioput = void 0;
const proprioput = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const authenticatedUserId = request.user.id; // Supondo que você tenha o ID do usuário autenticado disponível no request
    if (Number(id) !== authenticatedUserId) {
        return response.status(403).json({
            error: "Você não tem permissão para acessar este recurso"
        });
    }
    next();
});
exports.proprioput = proprioput;
//# sourceMappingURL=proprioPut.js.map