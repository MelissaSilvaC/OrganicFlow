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
exports.FeedController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class FeedController {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description } = request.body;
            const feed = yield prismaClient_1.prismaClient.feed.create({
                data: {
                    description,
                    id_user: Number(request.user.id)
                    // user:{//esse user se refere a um atributo
                    //     connect:{
                    //         id:Number(id_user)//conect references e fields
                    //     }
                    // }
                }
            });
            return response.json(feed);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const feed = yield prismaClient_1.prismaClient.feed.findMany({ include: {
                        user: {}
                    } });
                if (feed.length > 0) {
                    return response.json(feed);
                }
                return response.json('não existe feedback');
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

        let feed=await prismaClient.feed.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!feed){
            return response.json({
                error:"não existe o produto"
            })
        }

        feed=await prismaClient.feed.update({
            where:{
                id:Number(id)
            },
            data:{
                name
            }
        })

        return response.json(feed)
    }    */
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const feed = yield prismaClient_1.prismaClient.feed.delete({
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
exports.FeedController = FeedController;
//# sourceMappingURL=Feed.js.map