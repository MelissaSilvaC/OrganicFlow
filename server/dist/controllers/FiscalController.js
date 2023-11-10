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
exports.FiscalController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
const bcrypt_1 = __importDefault(require("bcrypt"));
class FiscalController {
    // async permissaoFiscal(request: Request, response: Response) {
    //   const { id_user } = request.body;
    //   const userResp=await prismaClient.user.findFirst({
    //       where: {
    //         id: Number(request.user.id),
    //     },
    //     select:{
    //       email:true
    //     }
    //   })
    //   if(userResp){
    //     const responsavel_email = userResp.email;//pega o email que foi exibido no userResp
    //     const userFiscal=await prismaClient.userRole.create({
    //       data:{
    //         responsavel_email:responsavel_email,
    //         user: { connect: { id:Number(id_user) } },
    //           role: { connect: { id: Number(3) } },  
    //       }
    //     })
    //     if (userFiscal instanceof Error) {
    //       return response.status(400).json(userFiscal.message);
    //     }
    //     const fiscal=await prismaClient.user.update({
    //       where:{
    //         id:Number(id_user)
    //       },
    //       data:{
    //         fiscal:true
    //       }
    //     })
    //     const userACL=await prismaClient.user.findFirst({
    //       where:{
    //         id:Number(id_user)
    //       },
    //       include: {
    //         // UserPermission:true,
    //         UserRole:{
    //           select:{
    //             role:{
    //               select:{
    //                 description:true
    //               }
    //             }
    //           }
    //         }
    //       },
    //     })
    //     return response.json(userACL)
    //   }
    // }
    permissaoFiscal(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password, email } = request.body;
            const User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });
            if (User) {
                return response.json({
                    error: "Esta conta já foi criada"
                });
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 10);
            const userResp = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(request.user.id),
                },
                select: {
                    email: true,
                    photo: true,
                }
            });
            if (userResp) {
                const user = yield prismaClient_1.prismaClient.user.create({
                    data: {
                        name,
                        email,
                        password: hashPassword,
                        photo: userResp.photo,
                    }
                });
                const id_user = user.id;
                const responsavel_email = userResp.email; //pega o email que foi exibido no userResp
                const userFiscal = yield prismaClient_1.prismaClient.userRole.create({
                    data: {
                        responsavel_email: responsavel_email,
                        user: { connect: { id: Number(id_user) } },
                        role: { connect: { id: Number(3) } },
                    }
                });
                if (userFiscal instanceof Error) {
                    return response.status(400).json(userFiscal.message);
                }
                const fiscal = yield prismaClient_1.prismaClient.user.update({
                    where: {
                        id: Number(id_user)
                    },
                    data: {
                        fiscal: true
                    }
                });
                const userACL = yield prismaClient_1.prismaClient.user.findFirst({
                    where: {
                        id: Number(id_user)
                    },
                    include: {
                        // UserPermission:true,
                        UserRole: {
                            select: {
                                role: {
                                    select: {
                                        description: true
                                    }
                                }
                            }
                        }
                    },
                });
                return response.json(userACL);
            }
        });
    }
    listarSeuFiscal(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const userResp = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(id),
                },
                select: {
                    email: true
                }
            });
            if (userResp) {
                const responsavel_email = userResp.email; //pega o email que foi exibido no userResp
                try {
                    const UserRole = yield prismaClient_1.prismaClient.userRole.findMany({
                        where: {
                            responsavel_email: responsavel_email
                        },
                        include: {
                            user: {}
                        }
                    });
                    return response.json(UserRole);
                }
                catch (error) {
                    return response.json(error);
                }
            }
        });
    }
    // async removerFiscal(request:Request, response:Response){
    //   const {id}=request.params
    //   try {
    //     // Primeiro, encontre o 'UserRole' que corresponde ao 'id_user' especificado
    //       const userRole = await prismaClient.userRole.findFirst({
    //           where: {
    //               id_user: Number(id),
    //           },
    //       });
    //       if (userRole) {
    //           await prismaClient.userRole.delete({
    //               where: {
    //                   id: userRole.id,
    //               },
    //           });
    //           response.json( "Acesso excluído com sucesso." );
    //       }
    //     } catch (error) {
    //         response.status(500).json({ error: "Ocorreu um erro ao excluir o acesso.", details: error });
    //     }
    //   }
    removerFiscal(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                // Primeiro, encontre o 'UserRole' que corresponde ao 'id_user' especificado
                const user = yield prismaClient_1.prismaClient.user.findFirst({
                    where: {
                        id: Number(id),
                    },
                });
                if (user) {
                    yield prismaClient_1.prismaClient.user.delete({
                        where: {
                            id: user.id,
                        },
                    });
                    response.json("Acesso excluído com sucesso.");
                }
            }
            catch (error) {
                response.status(500).json({ error: "Ocorreu um erro ao excluir o acesso.", details: error });
            }
        });
    }
    consultarFiscal(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            //consultar a empresa e o produto
            const { id } = request.params;
            const User = yield prismaClient_1.prismaClient.user.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!User) {
                return ('não existe');
            }
            const relatorio5 = yield prismaClient_1.prismaClient.varejo.findMany({
                where: {
                    user: {
                        id: User.id,
                    }
                }
            });
            if (relatorio5) {
                const relatorio = yield prismaClient_1.prismaClient.varejo.findMany({
                    where: {
                        user: {
                            id: User.id,
                        }
                    },
                    include: {
                        linha: {}
                    }
                });
                const responseJSON = {
                    User,
                    relatorio
                };
                return response.json(responseJSON);
            }
            const relatorio4 = yield prismaClient_1.prismaClient.armazenamento.findMany({
                where: {
                    user: {
                        id: User.id,
                    }
                }
            });
            if (relatorio4) {
                const relatorio = yield prismaClient_1.prismaClient.armazenamento.findMany({
                    where: {
                        user: {
                            id: User.id,
                        }
                    },
                    include: {
                        linha: {}
                    }
                });
                const responseJSON = {
                    User,
                    relatorio
                };
                return response.json(responseJSON);
            }
            const relatorio3 = yield prismaClient_1.prismaClient.transporte.findMany({
                where: {
                    user: {
                        id: User.id,
                    }
                }
            });
            if (relatorio3) {
                const relatorio = yield prismaClient_1.prismaClient.transporte.findMany({
                    where: {
                        user: {
                            id: User.id,
                        }
                    },
                    include: {
                        linha: {}
                    }
                });
                const responseJSON = {
                    User,
                    relatorio
                };
                return response.json(responseJSON);
            }
            const relatorio2 = yield prismaClient_1.prismaClient.embalagem.findMany({
                where: {
                    user: {
                        id: User.id,
                    }
                }
            });
            if (relatorio2) {
                const relatorio = yield prismaClient_1.prismaClient.embalagem.findMany({
                    where: {
                        user: {
                            id: User.id,
                        }
                    },
                    include: {
                        linha: {}
                    }
                });
                const responseJSON = {
                    User,
                    relatorio
                };
                return response.json(responseJSON);
            }
            const relatorio1 = yield prismaClient_1.prismaClient.prod_Agri.findMany({
                where: {
                    user: {
                        id: User.id,
                    }
                }
            });
            if (relatorio1) {
                const relatorio = yield prismaClient_1.prismaClient.prod_Agri.findMany({
                    where: {
                        user: {
                            id: User.id,
                        }
                    },
                    include: {
                        linha: {}
                    }
                });
                const responseJSON = {
                    User,
                    relatorio
                };
                return response.json(responseJSON);
            }
            return response.json("não foi encontrado relatório");
        });
    }
}
exports.FiscalController = FiscalController;
//# sourceMappingURL=FiscalController.js.map