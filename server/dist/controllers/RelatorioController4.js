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
exports.Relatorio4Controller = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
class Relatorio4Controller {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, local, praticas, responsavel, dt_entrada, dt_saida, id_linha } = request.body;
            const date = new Date();
            // Obtém a data no formato desejado (dia/mes/ano)
            const formattedDate = date.toLocaleDateString('pt-BR'); // Adapte o locale conforme necessário
            const armazenamento = yield prismaClient.armazenamento.create({
                data: {
                    nome,
                    local,
                    praticas,
                    responsavel,
                    dt_entrada,
                    dt_saida,
                    user: { connect: { id: Number(request.user.id) } },
                    linha: {
                        connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
                    },
                    date: formattedDate,
                },
            });
            return response.json(armazenamento);
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { nome, local, praticas, responsavel, dt_entrada, dt_saida } = request.body;
            let armazenamento = yield prismaClient.armazenamento.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!armazenamento) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            armazenamento = yield prismaClient.armazenamento.update({
                where: {
                    id: Number(id),
                },
                data: {
                    nome,
                    local,
                    praticas,
                    responsavel,
                    dt_entrada,
                    dt_saida,
                },
            });
            return response.json(armazenamento);
        });
    }
    //   async pesquisar(request: Request, response: Response) {
    //     const { nome } = request.query; // GET /armazenamento?nome=Armazem1; o query vem da URL
    //     const armazenamentoList = await prismaClient.armazenamento.findMany({
    //       where: {
    //         nome: {
    //           contains: String(nome), // Exibe uma lista de registros com o nome parecido
    //         },
    //         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
    //       },
    //       take: 4, // Limita o resultado a 4 registros
    //     });
    //     return response.json(armazenamentoList);
    //   }
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const armazenamento = yield prismaClient.armazenamento.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!armazenamento) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            yield prismaClient.armazenamento.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.json("Registro excluído com sucesso");
        });
    }
}
exports.Relatorio4Controller = Relatorio4Controller;
//# sourceMappingURL=RelatorioController4.js.map