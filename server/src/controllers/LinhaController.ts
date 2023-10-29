import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'
const QRCode = require('qrcode');

export class LinhaController{
    async criar(request:Request, response:Response){
        const{id_produto}=request.body;
        const date = new Date();

        // Obtém a data no formato desejado (dia/mes/ano)
        const formattedDate = date.toLocaleDateString('pt-BR'); // Adapte o locale conforme necessário

        console.log(id_produto)
        const linha=await prismaClient.linha.create({
            data:{
                
                date:formattedDate,
                produto: {
                    connect: { id: Number(id_produto) } // Conecta com o id_linha obtido do corpo da requisição
                }
            }
        })

        return response.json(linha);
        
    }
    
    async gerarQrcode(request:Request, response:Response){
       
        const postUrl= request.originalUrl//pega a rota
        
        const protocol = request.protocol;//pega o protocolo http
        const host = request.headers.host;//pega o host localhost
        const front= 'organicflow/' //url do front
        const url= `${protocol}://${host}${postUrl}`
        console.log(url)

        // Redirecionar o usuário para a nova URL
        // response.redirect(postUrl);

        QRCode.toDataURL(`${url}`, async function (err:any, qrcode:string) {
            const {id}=request.params
            console.log(qrcode);
            console.log(qrcode.length);
            
            const aa =await prismaClient.linha.update({
                where:{
                    id:Number(id)
                },
                data:{
                    qrcode: qrcode
                }
                
            });
            return response.json(aa)
        });
        
    }

    
    async consultar(request:Request, response:Response){
        try {
            const linha = await prismaClient.linha.findMany({
                
            })
            return response.json(linha)
            
        } catch (error) {
            return response.json(error)
        }
            
    } 
    /*   

    async atualizar(request:Request, response:Response){
        const{id}=request.params
        const{name}=request.body;

        let linha=await prismaClient.linha.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!linha){
            return response.json({
                error:"não existe o produto"
            })
        }

        linha=await prismaClient.linha.update({
            where:{
                id:Number(id)
            },
            data:{
                name
            }
        })

        return response.json(linha)
    }    */

    async deletar(request:Request, response:Response){
        const {id}=request.params
        try {
            const linha = await prismaClient.linha.delete({
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


    async pesquisar(request:Request, response:Response){
        const{id}=request.params;

        const linha=await prismaClient.linha.findFirst({
            where:{
                id:Number(id)
            },
            // select:{
            //     especie:true,
            //     Relatorio:{
            //         select:{
            //             etapa:true,
            //             descricao:true,
            //             user:{
            //                 select:{
            //                     name:true,
            //                     company:true
            //                 }
            //             }
            //         }
            //     }
            // }

            include:{
                Relatorio1:{
                    include:{
                        user:{}
                    }
                },
                Relatorio2:{
                    include:{
                        user:{}
                    }
                },
                Relatorio3:{
                    include:{
                        user:{}
                    }
                },
                Relatorio4:{
                    include:{
                        user:{}
                    }
                },
                Relatorio5:{
                    include:{
                        user:{}
                    }
                },
            }
        })

        if(!linha){
            return response.json({
                form:true,
                error:"não existe a linha"
            })
        }

        return response.json(linha)
    }    
}