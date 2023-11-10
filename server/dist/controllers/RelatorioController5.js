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
exports.Relatorio5Controller = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
class Relatorio5Controller {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, local, dt_chegada, id_linha, dt_validade } = request.body;
            const date = new Date();
            // Obtém a data no formato desejado (dia/mes/ano)
            const formattedDate = date.toLocaleDateString('pt-BR'); // Adapte o locale conforme necessário
            const varejo = yield prismaClient.varejo.create({
                data: {
                    nome,
                    local,
                    dt_chegada,
                    dt_validade,
                    user: { connect: { id: Number(request.user.id) } },
                    linha: {
                        connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
                    },
                    date: formattedDate,
                },
            });
            return response.json(varejo);
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { nome, local, dt_chegada, dt_validade } = request.body;
            let varejo = yield prismaClient.varejo.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!varejo) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            varejo = yield prismaClient.varejo.update({
                where: {
                    id: Number(id),
                },
                data: {
                    nome,
                    local,
                    dt_chegada,
                    dt_validade
                },
            });
            return response.json(varejo);
        });
    }
    //   async pesquisar(request: Request, response: Response) {
    //     const { nome } = request.query; // GET /varejo?nome=Loja1; o query vem da URL
    //     const varejoList = await prismaClient.varejo.findMany({
    //       where: {
    //         nome: {
    //           contains: String(nome), // Exibe uma lista de registros com o nome parecido
    //         },
    //         user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
    //       },
    //     });
    //     return response.json(varejoList);
    //   }
    // async consultar(request:Request, response:Response){
    //     try {
    //         const varejo = await prismaClient.varejo.findMany({
    //         })
    //         return response.json(varejo)
    //     } catch (error) {
    //         return response.json(error)
    //     }
    // } 
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const varejo = yield prismaClient.varejo.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!varejo) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            yield prismaClient.varejo.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.json("Registro excluído com sucesso");
        });
    }
}
exports.Relatorio5Controller = Relatorio5Controller;
//# sourceMappingURL=RelatorioController5.js.map