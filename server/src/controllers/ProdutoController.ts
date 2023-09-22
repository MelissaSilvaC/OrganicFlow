import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class ProdutoController {
  async criar(request: Request, response: Response) {
    const { nome, photo, id_linha } = request.body;


    const produto = await prismaClient.produto.create({
      data: {
        nome,
        photo,
        user: { connect: { id:Number(request.user.id)  } }, // Conecta com o usuário que está criando o registro
        linha: {
          connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
        }
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

//   async pesquisar(request: Request, response: Response) {
//     const { id } = request.query; // GET /produto?id=1; o query vem da URL
//     const produtoList = await prismaClient.produto.findMany({
//       where: {
//         nome: {
//           contains: String(nome), // Exibe uma lista de registros com o nome parecido
//         },
//         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
//       take: 4, // Limita o resultado a 4 registros
//     });

//     return response.json(produtoList);
//   }

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
