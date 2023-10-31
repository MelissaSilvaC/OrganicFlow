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
exports.GerenteController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class GerenteController {
    permissaoGerente(request, response) {
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
                        role: { connect: { id: Number(2) } },
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
    suspenderGerente(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                // Primeiro, encontre o 'UserRole' que corresponde ao 'id_user' especificado
                const userRole = yield prismaClient_1.prismaClient.userRole.findFirst({
                    where: {
                        id_user: Number(id),
                    },
                });
                if (userRole) {
                    yield prismaClient_1.prismaClient.userRole.delete({
                        where: {
                            id: userRole.id,
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
    listarGerente(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gerentesComUserRole = yield prismaClient_1.prismaClient.user.findMany({
                    where: {
                        gerente: true
                    },
                    include: {
                        UserRole: {
                            select: {
                                id_user: true
                            }
                        }
                    }
                });
                const gerentesSemUserRole = gerentesComUserRole.filter(gerente => !gerente.UserRole || gerente.UserRole.length === 0);
                //const array_novo = array_velho(para cada item no array, se o gerente.UserRole não existir )
                if (gerentesSemUserRole.length > 0) {
                    return response.json(gerentesSemUserRole);
                }
                else {
                    return response.json("nenhum usuario na lista");
                }
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    listarGerenteValido(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa = yield prismaClient_1.prismaClient.userRole.findMany({
                    where: {
                        id_role: 2, //id_role do gerente
                    },
                    include: {
                        user: {}
                    }
                });
                return response.json(empresa);
                // const gerentesSemUserRole = gerentesComUserRole.filter(gerente => !gerente.UserRole || gerente.UserRole.length === 0);
                // //const array_novo = array_velho(para cada item no array, se o gerente.UserRole não existir )
                // if (gerentesSemUserRole.length > 0) {
                //     return response.json(gerentesSemUserRole);
                // } else {
                //     return response.json("nenhum usuario na lista");
                // }
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    consultarEmpresa(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa = yield prismaClient_1.prismaClient.userRole.findMany({
                    where: {
                        id_role: 2, //id_role do gerente
                    },
                    include: {
                        user: {}
                    }
                });
                return response.json(empresa);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    pesquisarEmpresa(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const gerente = yield prismaClient_1.prismaClient.user.findUnique({
                    where: {
                        id: Number(id), //resolver esse problema. admin exibe
                    },
                    select: {
                        gerente: true
                    }
                });
                if ((gerente === null || gerente === void 0 ? void 0 : gerente.gerente) == !true) { //se for diferente de true
                    return response.json("Empresa não existe");
                }
                const produto = yield prismaClient_1.prismaClient.user.findMany({
                    where: {
                        id: Number(id), //resolver esse problema. admin exibe
                    },
                    include: {
                        Produto: {}
                    }
                });
                return response.json(produto);
            }
            catch (error) {
            }
            /*
            try {
              const{id}=request.params
          
              const gerente=await prismaClient.user.findFirst({
                where: {
                  id: Number(id),//resolver esse problema. admin exibe
                },
                select:{
                  gerente:true
                }
                
              })
              if(gerente?.gerente==!true){//se for diferente de true
                return response.json("não tem direito a acessar essa rota")
              }
              
              const userResp=await prismaClient.user.findFirst({
                where: {
                  id: Number(id),//resolver esse problema. admin exibe
                },
                select:{
                  email:true
                }
                
              })
              if(userResp){
                
                const responsavel_email = userResp.email;//pega o email que foi exibido no userResp
          
                try {
                  const userRole = await prismaClient.userRole.findMany({
                      where:{
                          responsavel_email:responsavel_email
                      },
                      include:{
                        user:{
                          select:{
                            id:true
                          }
                        }
                      }
                      
                  })
                  if (userRole && userRole.length > 0) {
                    const userId = userRole[0]?.user?.id;
          
                    console.log(userId)
                    
                    const relatorio5 = await prismaClient.prod_Agri.findMany({
                      where:{
                        user:{
                          id:userId,
                        }
                      }
                    })
          
                     if(relatorio5){
                    const relatorio = await prismaClient.prod_Agri.findMany({
                      where:{
                        user:{
                          id:userId,
                        }
                      },
                      include:{
                        linha:{}
                      }
                    })
                    console.log("a")
                    return response.json(relatorio)
                    
                  }
          
                  const relatorio4 = await prismaClient.prod_Agri.findMany({
                    where:{
                      user:{
                        id:userId,
                      }
                    }
                  })
                  
                  if(relatorio4){
                    const relatorio = await prismaClient.prod_Agri.findMany({
                      where:{
                        user:{
                          id:userId,
                        }
                      },
                      include:{
                        linha:{}
                      }
                    })
                    return response.json(relatorio)
                  }
          
                  const relatorio3 = await prismaClient.prod_Agri.findMany({
                    where:{
                      user:{
                        id:userId,
                      }
                    }
                  })
                  
                  if(relatorio3){
                    const relatorio = await prismaClient.prod_Agri.findMany({
                      where:{
                        user:{
                          id:userId,
                        }
                      },
                      include:{
                        linha:{}
                      }
                    })
                    return response.json(relatorio)
                  }
          
                  const relatorio2 = await prismaClient.prod_Agri.findMany({
                    where:{
                      user:{
                        id:userId,
                      }
                    }
                  })
                  
                  if(relatorio2){
                    const relatorio = await prismaClient.prod_Agri.findMany({
                      where:{
                        user:{
                          id:userId,
                        }
                      },
                      include:{
                        linha:{}
                      }
                    })
                    return response.json(relatorio)
                  }
          
                  const relatorio1 = await prismaClient.prod_Agri.findMany({
                    where:{
                      user:{
                        id:userId,
                      }
                    }
                  })
                  
                  if(relatorio1){
                    const relatorio = await prismaClient.prod_Agri.findMany({
                      where:{
                        user:{
                          id:userId,
                        }
                      },
                      include:{
                        linha:{}
                      }
                    })
                    console.log("a")
                    return response.json(relatorio)
                  }
          
                  return response.json("nenhum relatorio encontrado")
          
                  }
                  
                  else {
                    return response.json({ message: "UserRole not found" });
                  }
                  
                } catch (error) {
                    return response.json(error)
                }
              }
          
                  
                  
                 
                  
            } catch (error) {
                return response.json(error)
            }*/
        });
    }
}
exports.GerenteController = GerenteController;
//# sourceMappingURL=GerenteController.js.map