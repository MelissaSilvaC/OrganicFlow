import { prismaClient } from '../databases/prismaClient'
import { Request, Response } from "express";

export class UserAccess {
  async userFiscal(request: Request, response: Response) {
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


  }

  async userFiscalConsultar(request: Request, response: Response) {
    try {
      const User = await prismaClient.user.findMany({
          include:{
              UserPermission:{},
              UserRole:{},
          },
          
      })
      return response.json(User)
      
    } catch (error) {
        return response.json(error)
    }

  }

  async userGerente(request: Request, response: Response) {
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
            role: { connect: { id: Number(3) } },  
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


  }}
}