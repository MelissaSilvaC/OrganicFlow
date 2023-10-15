import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'
import bcrypt from 'bcrypt'

export class UserController{
    async criar(request:Request, response:Response){
        const{name,password, email, company,photo,cnpj,gerente}=request.body;

        const User=await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(User){
            return response.json({
                error:"Esta conta já foi criada"
            })
        }

        const hashPassword=await bcrypt.hash(password,10)

        const user=await prismaClient.user.create({
            data:{
                name,
                email,
                password:hashPassword,
                company,
                photo,
                cnpj,
                gerente
            }
            
        })
    

        return response.json(user)
    }
    
    async consultar(request:Request, response:Response){
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

    async atualizar(request:Request, response:Response){
        const{id}=request.params
        const{name,company,cnpj,photo,local}=request.body;

        let User=await prismaClient.user.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!User){
            return response.json({
                error:"não existe o produto"
            })
        }

        // const hashPassword=await bcrypt.hash(password,10)

        User=await prismaClient.user.update({
            where:{
                id:Number(id)
            },
            data:{
                name,
                company,
                cnpj,
                photo,
                local
            }
        })

        return response.json(User)
    }    
/*
    async deletar(request:Request, response:Response){
        const {id}=request.params
        const User = await prismaClient.user.delete({
            where: {
               id:Number(id)
            },
          }) 
        response.json("registro excluído")
    }
*/

    async pesquisar(request:Request, response:Response){
        const { email } = request.query; //GET /user?email=João@gmail.com; o query vem da url
        const User = await prismaClient.user.findMany({
            where: {
                email: {
                  contains: String(email),//exibe uma lista de usuarios com o email parecido
                },
              },
              take: 4, // Limita o resultado a 4 usuários
        });

        if (!User) {
            return response.json({
            error: "Usuário não encontrado",
            });
        }

        return response.json(User);
    }

    
    
}