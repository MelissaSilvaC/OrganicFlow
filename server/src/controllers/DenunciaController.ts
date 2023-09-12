import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class DenunciaController{
    async criar(request:Request, response:Response){
        const{alvo, description}=request.body;

        const denuncia=await prismaClient.denuncia.create({
            data:{
                alvo,
                description,
                id_user:Number(request.user.id)
                // user:{//esse user se refere a um atributo
                //     connect:{
                //         id:Number(id_user)//conect references e fields
                //     }
                // }
            }
        })

        return response.json(denuncia)
    }
    
    async consultar(request:Request, response:Response){
        try {
            const denuncia = await prismaClient.denuncia.findMany({})
            return response.json(denuncia)
            
        } catch (error) {
            return response.json(error)
        }
            
    } 
    /*   

    async atualizar(request:Request, response:Response){
        const{id}=request.params
        const{name}=request.body;

        let denuncia=await prismaClient.denuncia.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!denuncia){
            return response.json({
                error:"não existe o produto"
            })
        }

        denuncia=await prismaClient.denuncia.update({
            where:{
                id:Number(id)
            },
            data:{
                name
            }
        })

        return response.json(denuncia)
    }    */

    async deletar(request:Request, response:Response){
        const {id}=request.params
        try {
            const denuncia = await prismaClient.denuncia.delete({
              where: {
                id: Number(id)
              },
            });
            response.json("registro excluído");
          } catch (error) {
            console.error("Erro ao excluir o registro:", error);
            response.status(500).json("Erro ao excluir o registro");
          }
    }

/*
    async pesquisar(request:Request, response:Response){
        const{id}=request.params;

        const denuncia=await prismaClient.denuncia.findFirst({
            where:{
                id:Number(id)
            }
        })

        if(!denuncia){
            return response.json({
                error:"não existe o produto"
            })
        }

        return response.json(denuncia)
    }    */
}