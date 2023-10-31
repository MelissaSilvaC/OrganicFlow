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
exports.UserAccess = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class UserAccess {
    userFiscal(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = request.body;
            const userResp = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(request.user.id),
                },
                select: {
                    email: true
                }
            });
            if (userResp) {
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
            // const userPermission=await prismaClient.userPermission.create({
            //   data:{
            //     user:{connect:{id:Number(id_user)}},
            //     permission:{connect:{id:Number(id_permission)}}
            //   }
            // })
            // if (userPermission instanceof Error) {
            //   return response.status(400).json(userPermission.message);
            // }
            // const results = await prismaClient.rolePermission.create({
            //     user: { connect: { id:Number(id_user) } },
            //     permissions:{connect:{id:Number(id_permission)}},
            // });
        });
    }
    userFiscalConsultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const User = yield prismaClient_1.prismaClient.user.findMany({
                    include: {
                        UserPermission: {},
                        UserRole: {},
                    },
                });
                return response.json(User);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    userGerente(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = request.body;
            const userResp = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(request.user.id),
                },
                select: {
                    email: true
                }
            });
            if (userResp) {
                const responsavel_email = userResp.email; //pega o email que foi exibido no userResp
                const userGerente = yield prismaClient_1.prismaClient.userRole.create({
                    data: {
                        responsavel_email: responsavel_email,
                        user: { connect: { id: Number(id_user) } },
                        role: { connect: { id: Number(3) } },
                    }
                });
                if (userGerente instanceof Error) {
                    return response.status(400).json(userGerente.message);
                }
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
                // const results = await prismaClient.rolePermission.create({
                //     user: { connect: { id:Number(id_user) } },
                //     permissions:{connect:{id:Number(id_permission)}},
                // });
            }
        });
    }
}
exports.UserAccess = UserAccess;
//# sourceMappingURL=UserAccess.js.map