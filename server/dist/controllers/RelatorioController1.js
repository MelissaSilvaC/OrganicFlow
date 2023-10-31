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
exports.Relatorio1Controller = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
class Relatorio1Controller {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, local, dt_plantio, dt_colheita, insumo, praticas, id_linha, medalha } = request.body;
            const prodAgri = yield prismaClient.prod_Agri.create({
                data: {
                    nome,
                    local,
                    dt_plantio,
                    dt_colheita,
                    insumo,
                    praticas,
                    medalha,
                    // user: { connect: { id:Number(request.user.id)  } }, // Conecta com o usuário que está criando o registro
                    user: { connect: { id: 3 } },
                    linha: {
                        connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
                    }
                },
            });
            return response.json(prodAgri);
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { nome, local, dt_plantio, dt_colheita, insumo, praticas, medalha } = request.body;
            let prodAgri = yield prismaClient.prod_Agri.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!prodAgri) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            prodAgri = yield prismaClient.prod_Agri.update({
                where: {
                    id: Number(id),
                },
                data: {
                    nome,
                    local,
                    dt_plantio,
                    dt_colheita,
                    insumo,
                    praticas,
                    medalha
                },
            });
            return response.json(prodAgri);
        });
    }
    //   async pesquisar(request: Request, response: Response) {
    //     const { id } = request.query; // GET /prod_agri?id=1; o query vem da URL
    //     const prodAgriList = await prismaClient.prod_Agri.findMany({
    //       where: {
    //         nome: {
    //           contains: String(nome), // Exibe uma lista de registros com o nome parecido
    //         },
    //         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
    //       take: 4, // Limita o resultado a 4 registros
    //     });
    //     return response.json(prodAgriList);
    //   }
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const prodAgri = yield prismaClient.prod_Agri.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!prodAgri) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            yield prismaClient.prod_Agri.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.json("Registro excluído com sucesso");
        });
    }
}
exports.Relatorio1Controller = Relatorio1Controller;
//# sourceMappingURL=RelatorioController1.js.map