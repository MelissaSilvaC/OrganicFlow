import { prismaClient } from '../databases/prismaClient'
import { Request, Response } from "express";

export class GerenteController {
  async permissaoGerente(request: Request, response: Response) {
    const { id_user} = request.body;

    const userResp=await prismaClient.user.findFirst({
      where: {
        id: Number(request.user.id),
      },
      select:{
        email:true
      }
    })

    if(userResp){
      const responsavel_email = userResp.email;//pega o email que foi exibido no userResp

      const userGerente=await prismaClient.userRole.create({
        data:{
          responsavel_email:responsavel_email,
          user: { connect: { id:Number(id_user) } },
            role: { connect: { id: Number(2) } },  
        }
      })

      if (userGerente instanceof Error) {
        return response.status(400).json(userGerente.message);
      }

    const userACL=await prismaClient.user.findFirst({
      where:{
        id:Number(id_user)
        
      },
      include: {
        // UserPermission:true,
        UserRole:{
          select:{
            role:{
              select:{
                description:true
              }
            }
          }
        }
      },
    })

    return response.json(userACL)
    // const results = await prismaClient.rolePermission.create({
    //     user: { connect: { id:Number(id_user) } },
    //     permissions:{connect:{id:Number(id_permission)}},
    // });


  }
  

}

async suspenderGerente (request:Request, response:Response){
  const {id}=request.params
  try {
    // Primeiro, encontre o 'UserRole' que corresponde ao 'id_user' especificado
      const userRole = await prismaClient.userRole.findFirst({
          where: {
              id_user: Number(id),
          },
      });

      if (userRole) {
          await prismaClient.userRole.delete({
              where: {
                  id: userRole.id,
              },
          });
          response.json( "Acesso excluído com sucesso." );
      }
    } catch (error) {

        response.status(500).json({ error: "Ocorreu um erro ao excluir o acesso.", details: error });
    }
  }

async listarGerente(request:Request, response:Response){
    try {
      const gerentesComUserRole = await prismaClient.user.findMany({
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
      } else {
          return response.json("nenhum usuario na lista");
      }

    } catch (error) {
        return response.json(error);
    }
}

async consultarEmpresa(request:Request, response:Response){
  try {
      const empresa = await prismaClient.user.findMany({
          where:{
            gerente:true
          }
          
      })
      return response.json(empresa)
      
  } catch (error) {
      return response.json(error)
  }
      
}   

async pesquisarEmpresa(request:Request, response:Response){
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
  }
}

}