import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class ProdutoController {
  async criar(request: Request, response: Response) {
    const { nome, photo} = request.body;


    const produto = await prismaClient.produto.create({
      data: {
        nome,
        photo,
        user: { connect: { id:Number(request.user.id)  } }, // Conecta com o usuário que está criando o registro
        
      },
    });

    return response.json(produto);
  }

 

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, photo } = request.body;

    let produto = await prismaClient.produto.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado

      },
    });
    
    if (!produto) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    produto = await prismaClient.produto.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        photo,
      },
    });

    return response.json(produto);
  }

  async pesquisar(request: Request, response: Response) {
    try {
      const{id}=request.params

      const produto = prismaClient.produto.findMany({
        where:{
          id:Number(id)
        },
        include:{
          Linha:{}
        }
      })

      return response.json(produto)
      
    } catch (error) {
        return response.json(error)
    }
  }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;

    const produto = await prismaClient.produto.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!produto) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    await prismaClient.produto.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json("Registro excluído com sucesso");
  }
}
