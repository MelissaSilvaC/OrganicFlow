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
exports.DenunciaController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class DenunciaController {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_linha, description, stage, argumento } = request.body;
            const denuncia = yield prismaClient_1.prismaClient.denuncia.create({
                data: {
                    description,
                    id_user: Number(request.user.id),
                    stage,
                    argumento,
                    id_linha
                    // user:{//esse user se refere a um atributo
                    //     connect:{
                    //         id:Number(id_user)//conect references e fields
                    //     }
                    // }
                },
            });
            return response.json(denuncia);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const denuncias = yield prismaClient_1.prismaClient.denuncia.findMany({
                    include: {
                        user: {
                            select: {
                                name: true,
                                fiscal: true,
                            },
                        },
                    },
                });
                // Ordenar as denúncias com base no campo fiscal
                denuncias.sort((a, b) => {
                    var _a, _b;
                    const fiscalA = ((_a = a.user) === null || _a === void 0 ? void 0 : _a.fiscal) ? 1 : 0;
                    const fiscalB = ((_b = b.user) === null || _b === void 0 ? void 0 : _b.fiscal) ? 1 : 0;
                    return fiscalB - fiscalA; // fiscal true vem primeiro
                });
                return response.json(denuncias);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    /*

    async atualizar(request:Request, response:Response){
        const{id}=request.params
        const{name}=request.body;

        let denuncia=await prismaClient.denuncia.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!denuncia){
            return response.json({
                error:"não existe o produto"
            })
        }

        denuncia=await prismaClient.denuncia.update({
            where:{
                id:Number(id)
            },
            data:{
                name
            }
        })

        return response.json(denuncia)
    }    */
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const denuncia = yield prismaClient_1.prismaClient.denuncia.delete({
                    where: {
                        id: Number(id)
                    },
                });
                response.json("registro excluído");
            }
            catch (error) {
                console.error("Erro ao excluir o registro:", error);
                response.status(500).json("Erro ao excluir o registro");
            }
        });
    }
}
exports.DenunciaController = DenunciaController;
//# sourceMappingURL=DenunciaController.js.map