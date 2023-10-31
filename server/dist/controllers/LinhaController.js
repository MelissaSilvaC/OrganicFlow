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
exports.LinhaController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
const QRCode = require('qrcode');
class LinhaController {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_produto } = request.body;
            const date = new Date();
            // Obtém a data no formato desejado (dia/mes/ano)
            const formattedDate = date.toLocaleDateString('pt-BR'); // Adapte o locale conforme necessário
            console.log(id_produto);
            const linha = yield prismaClient_1.prismaClient.linha.create({
                data: {
                    date: formattedDate,
                    produto: {
                        connect: { id: Number(id_produto) } // Conecta com o id_linha obtido do corpo da requisição
                    }
                }
            });
            return response.json(linha);
        });
    }
    gerarQrcode(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const postUrl = request.originalUrl; //pega a rota
            const protocol = request.protocol; //pega o protocolo http
            const host = request.headers.host; //pega o host localhost
            const front = 'organicflow/'; //url do front
            const url = `${protocol}://${host}${postUrl}`;
            console.log(url);
            // Redirecionar o usuário para a nova URL
            // response.redirect(postUrl);
            QRCode.toDataURL(`${url}`, function (err, qrcode) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { id } = request.params;
                    console.log(qrcode);
                    console.log(qrcode.length);
                    const aa = yield prismaClient_1.prismaClient.linha.update({
                        where: {
                            id: Number(id)
                        },
                        data: {
                            qrcode: qrcode
                        }
                    });
                    return response.json(aa);
                });
            });
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const linha = yield prismaClient_1.prismaClient.linha.findMany({});
                return response.json(linha);
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

        let linha=await prismaClient.linha.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!linha){
            return response.json({
                error:"não existe o produto"
            })
        }

        linha=await prismaClient.linha.update({
            where:{
                id:Number(id)
            },
            data:{
                name
            }
        })

        return response.json(linha)
    }    */
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const linha = yield prismaClient_1.prismaClient.linha.delete({
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
    pesquisar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const linha = yield prismaClient_1.prismaClient.linha.findFirst({
                where: {
                    id: Number(id)
                },
                // select:{
                //     especie:true,
                //     Relatorio:{
                //         select:{
                //             etapa:true,
                //             descricao:true,
                //             user:{
                //                 select:{
                //                     name:true,
                //                     company:true
                //                 }
                //             }
                //         }
                //     }
                // }
                include: {
                    Relatorio1: {
                        include: {
                            user: {}
                        }
                    },
                    Relatorio2: {
                        include: {
                            user: {}
                        }
                    },
                    Relatorio3: {
                        include: {
                            user: {}
                        }
                    },
                    Relatorio4: {
                        include: {
                            user: {}
                        }
                    },
                    Relatorio5: {
                        include: {
                            user: {}
                        }
                    },
                }
            });
            if (!linha) {
                return response.json({
                    form: true,
                    error: "não existe a linha"
                });
            }
            return response.json(linha);
        });
    }
}
exports.LinhaController = LinhaController;
//# sourceMappingURL=LinhaController.js.map