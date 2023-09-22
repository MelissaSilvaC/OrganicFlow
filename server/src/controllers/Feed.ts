import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class FeedController{
    async criar(request:Request, response:Response){
        const{description}=request.body;

        const feed=await prismaClient.feed.create({
            data:{
                description,
                id_user:Number(request.user.id)
                // user:{//esse user se refere a um atributo
                //     connect:{
                //         id:Number(id_user)//conect references e fields
                //     }
                // }
            }
        })

        return response.json(feed)
    }
    
    async consultar(request:Request, response:Response){
        try {
            const feed = await prismaClient.feed.findMany({})
            return response.json(feed)
            
        } catch (error) {
            return response.json(error)
        }
            
    } 
    /*   

    async atualizar(request:Request, response:Response){
        const{id}=request.params
        const{name}=request.body;

        let feed=await prismaClient.feed.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!feed){
            return response.json({
                error:"não existe o produto"
            })
        }

        feed=await prismaClient.feed.update({
            where:{
                id:Number(id)
            },
            data:{
                name
            }
        })

        return response.json(feed)
    }    */

    async deletar(request:Request, response:Response){
        const {id}=request.params
        try {
            const feed = await prismaClient.feed.delete({
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

        const feed=await prismaClient.feed.findFirst({
            where:{
                id:Number(id)
            }
        })

        if(!feed){
            return response.json({
                error:"não existe o produto"
            })
        }

        return response.json(feed)
    }    */
}