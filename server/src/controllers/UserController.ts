import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'
import bcrypt from 'bcrypt'
import cloudinary from 'cloudinary';

export class UserController{
    async criar(request:Request, response:Response){
        const{name,password, email,telefone, cnpj,gerente,photo,local}=request.body;

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
                telefone,
                cnpj,
                gerente,
                photo,
                local
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
        const{name,photo,local}=request.body;
        // const authenticatedUserId = request.user.id; // Supondo que você tenha o ID do usuário autenticado disponível no request

        let user = await prismaClient.user.findFirst({
            where: {
                id: Number(id)
            }
        });
    
        if (!user) {
            return response.json({
                error: "Usuário não encontrado"
            });
        }
    
        // if (user.id !== authenticatedUserId) {
        //     return response.status(403).json({
        //         error: "Você não tem permissão para editar este usuário"
        //     });
        // }
        if (request.file) {
            const result = await cloudinary.v2.uploader.upload(request.file.path); // Faz upload da imagem para o Cloudinary
      
            const user = await prismaClient.user.update({
              where:{
                id:Number(id)
              },
              data: {
                name,
                photo: result.secure_url, // Armazena a URL da imagem no banco de dados
                local,
              },
              
            });
      
            return response.json(user);
        }else{
            user = await prismaClient.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name,
                    local
                }
            });
            return response.json(user);
        }
    }    

    async banir(request:Request, response:Response){
        const{id}=request.params
 
        let User=await prismaClient.user.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!User){
            return response.json({
                error:"não existe o usuario"
            })
        }
 
        // const hashPassword=await bcrypt.hash(password,10)
 
        User=await prismaClient.user.update({
            where:{
                id:Number(id)
            },
            data:{
                ban:true,
            }
        })

        return (response.json(User))
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
        const {id} = request.params
        // const { email } = request.query; //GET /user?email=João@gmail.com; o query vem da url
        const User = await prismaClient.user.findFirst({
            // where: {
            //     email: {
            //       contains: String(email),//exibe uma lista de usuarios com o email parecido
            //     },
            //   },
            //   take: 4, // Limita o resultado a 4 usuários

            where:{
                id:Number(id)
            }
        });

        if (!User) {
            return response.json({
            error: "Usuário não encontrado",
            });
        }

        return response.json(User);
    }

    
    
}