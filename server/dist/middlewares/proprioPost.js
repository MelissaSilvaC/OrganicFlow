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
exports.proprio = void 0;
const proprio = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authenticatedUserId = request.user.id; // Supondo que você tenha o ID do usuário autenticado disponível no request
    const { id_user } = request.body;
    if (Number(id_user) !== authenticatedUserId) {
        return response.status(403).json({
            error: "Você não tem permissão para criar este recurso para outro usuário"
        });
    }
    next();
});
exports.proprio = proprio;
//# sourceMappingURL=proprioPost.js.map