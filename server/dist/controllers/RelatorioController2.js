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
exports.Relatorio2Controller = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
class Relatorio2Controller {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, local, ingrediente, praticas, dt_processamento, dt_embalagem, id_linha, } = request.body;
            const date = new Date();
            // Obtém a data no formato desejado (dia/mes/ano)
            const formattedDate = date.toLocaleDateString('pt-BR'); // Adapte o locale conforme necessário
            const embalagem = yield prismaClient.embalagem.create({
                data: {
                    nome,
                    local,
                    ingrediente,
                    praticas,
                    dt_processamento,
                    dt_embalagem,
                    user: { connect: { id: Number(request.user.id) } },
                    linha: {
                        connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
                    },
                    date: formattedDate,
                },
            });
            return response.json(embalagem);
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { nome, local, ingrediente, praticas, dt_processamento, dt_embalagem, } = request.body;
            let embalagem = yield prismaClient.embalagem.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!embalagem) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            embalagem = yield prismaClient.embalagem.update({
                where: {
                    id: Number(id),
                },
                data: {
                    nome,
                    local,
                    ingrediente,
                    praticas,
                    dt_processamento,
                    dt_embalagem,
                },
            });
            return response.json(embalagem);
        });
    }
    //   async pesquisar(request: Request, response: Response) {
    //     const { nome } = request.query; // GET /embalagem?nome=Embalagem1; o query vem da URL
    //     const embalagemList = await prismaClient.Embalagem.findMany({
    //       where: {
    //         nome: {
    //           contains: String(nome), // Exibe uma lista de registros com o nome parecido
    //         },
    //         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
    //       },
    //       take: 4, // Limita o resultado a 4 registros
    //     });
    //     return response.json(embalagemList);
    //   }
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const embalagem = yield prismaClient.embalagem.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!embalagem) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            yield prismaClient.embalagem.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.json("Registro excluído com sucesso");
        });
    }
}
exports.Relatorio2Controller = Relatorio2Controller;
//# sourceMappingURL=RelatorioController2.js.map