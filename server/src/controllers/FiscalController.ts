import { prismaClient } from '../databases/prismaClient'
import { Request, Response } from "express";

export class FiscalController {
  async permissaoFiscal(request: Request, response: Response) {
    const { id_user } = request.body;

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

      const userFiscal=await prismaClient.userRole.create({
        data:{
          responsavel_email:responsavel_email,
          user: { connect: { id:Number(id_user) } },
            role: { connect: { id: Number(3) } },  
        }
      })
      if (userFiscal instanceof Error) {
        return response.status(400).json(userFiscal.message);
      }
      
      const fiscal=await prismaClient.user.update({
        where:{
          id:Number(id_user)
        },
        data:{
          fiscal:true
        }
      })

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
    }
  }

  async listarSeuFiscal(request: Request, response: Response) {
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

      try {
        const UserRole = await prismaClient.userRole.findMany({
            where:{
                responsavel_email:responsavel_email
            },
            include:{
              user:{}
            }
            
        })
        return response.json(UserRole)
        
      } catch (error) {
          return response.json(error)
      }
    }
  }
 
  async removerFiscal(request:Request, response:Response){
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

  async consultarFiscal(request:Request, response:Response){

    //consultar a empresa e o produto
    
    const {id}=request.params
    const User = await prismaClient.user.findUnique({
        where:{
            id:Number(id)
        }
    })
    if(!User){
      return('não existe')
    }

    const relatorio5 = await prismaClient.varejo.findMany({
      where:{
        user:{
          id:User.id,
        }
      }
    })
    
    if(relatorio5){
      const relatorio = await prismaClient.varejo.findMany({
        where:{
          user:{
            id:User.id,
          }
        },
        include:{
          linha:{}
        }
      })

      const responseJSON = {
        User,
        relatorio
      };

      return response.json(responseJSON);
      
    }

    const relatorio4 = await prismaClient.armazenamento.findMany({
      where:{
        user:{
          id:User.id,
        }
      }
    })
    
    if(relatorio4){
      const relatorio = await prismaClient.armazenamento.findMany({
        where:{
          user:{
            id:User.id,
          }
        },
        include:{
          linha:{}
        }
      })
      const responseJSON = {
        User,
        relatorio
      };

      return response.json(responseJSON);
    }

    const relatorio3 = await prismaClient.transporte.findMany({
      where:{
        user:{
          id:User.id,
        }
      }
    })
    
    if(relatorio3){
      const relatorio = await prismaClient.transporte.findMany({
        where:{
          user:{
            id:User.id,
          }
        },
        include:{
          linha:{}
        }
      })
      const responseJSON = {
        User,
        relatorio
      };

      return response.json(responseJSON);
    }

    const relatorio2 = await prismaClient.embalagem.findMany({
      where:{
        user:{
          id:User.id,
        }
      }
    })
    
    if(relatorio2){
      const relatorio = await prismaClient.embalagem.findMany({
        where:{
          user:{
            id:User.id,
          }
        },
        include:{
          linha:{}
        }
      })
      const responseJSON = {
        User,
        relatorio
      };

      return response.json(responseJSON);
    }

    const relatorio1 = await prismaClient.prod_Agri.findMany({
      where:{
        user:{
          id:User.id,
        }
      }
    })
    
    if(relatorio1){
      const relatorio = await prismaClient.prod_Agri.findMany({
        where:{
          user:{
            id:User.id,
          }
        },
        include:{
          linha:{}
        }
      })
      const responseJSON = {
        User,
        relatorio
      };

      return response.json(responseJSON);
    }

    return response.json("não foi encontrado relatório")
  } 
}
