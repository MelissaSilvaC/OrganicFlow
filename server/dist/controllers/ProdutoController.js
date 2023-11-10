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
exports.ProdutoController = void 0;
const client_1 = require("@prisma/client");
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Substitua com seu segredo de API Cloudinary
});
const prismaClient = new client_1.PrismaClient();
class ProdutoController {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = request.body;
            try {
                // Verifica se foi enviado um arquivo de imagem
                if (request.file) {
                    const result = yield cloudinary_1.default.v2.uploader.upload(request.file.path); // Faz upload da imagem para o Cloudinary
                    const produto = yield prismaClient.produto.create({
                        data: {
                            nome,
                            photo: result.secure_url,
                            user: { connect: { id: Number(request.user.id) } }, // Conecta com o usuário que está criando o registro
                        },
                    });
                    return response.json(produto);
                }
                // Se não foi enviado um arquivo, retorna um erro
                return response.status(400).json({ error: 'Nenhuma imagem enviadas' });
            }
            catch (error) {
                console.error('Error creating product:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = request.body;
            const { id } = request.params;
            let produto = yield prismaClient.produto.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) },
                },
            });
            if (!produto) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            try {
                // Verifica se foi enviado um arquivo de imagem
                if (request.file) {
                    const result = yield cloudinary_1.default.v2.uploader.upload(request.file.path); // Faz upload da imagem para o Cloudinary
                    const produto = yield prismaClient.produto.update({
                        where: {
                            id: Number(id)
                        },
                        data: {
                            nome,
                            photo: result.secure_url, // Armazena a URL da imagem no banco de dados
                        },
                    });
                    return response.json(produto);
                }
                else {
                    const produto = yield prismaClient.produto.update({
                        where: {
                            id: Number(id)
                        },
                        data: {
                            nome,
                        },
                    });
                    return response.json(produto);
                }
                // Se não foi enviado um arquivo, retorna um erro
            }
            catch (error) {
                console.error('Error creating product:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    pesquisar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const produto = yield prismaClient.produto.findFirst({
                    where: {
                        id: Number(id)
                    },
                    include: {
                        Linha: {
                            orderBy: {
                                id: 'desc'
                            }
                        }
                    }
                });
                if (!produto) {
                    return response.json('erro');
                }
                return response.json(produto);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const produto = yield prismaClient.produto.findFirst({
                where: {
                    id: Number(id),
                    user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
                },
            });
            if (!produto) {
                return response.json({
                    error: "Registro não encontrado ou não pertence ao usuário autenticado",
                });
            }
            yield prismaClient.produto.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.json("Registro excluído com sucesso");
        });
    }
}
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map