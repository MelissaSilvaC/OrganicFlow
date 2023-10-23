import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class Relatorio1Controller {
  async criar(request: Request, response: Response) {
    const { nome, local, dt_plantio, dt_colheita, insumo, praticas,id_linha,medalha } = request.body;


    const prodAgri = await prismaClient.prod_Agri.create({
      data: {
        nome,
        local,
        dt_plantio,
        dt_colheita,
        insumo,
        praticas,
        medalha,
        // user: { connect: { id:Number(request.user.id)  } }, // Conecta com o usuário que está criando o registro
        user: { connect: { id:3  } }, // teste
        linha: {
          connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
        }
      },
    });

    return response.json(prodAgri);
  }

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, local, dt_plantio, dt_colheita, insumo, praticas,medalha } = request.body;

    let prodAgri = await prismaClient.prod_Agri.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado

      },
    });
    
    if (!prodAgri) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    prodAgri = await prismaClient.prod_Agri.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        local,
        dt_plantio,
        dt_colheita,
        insumo,
        praticas,
        medalha
      },
    });

    return response.json(prodAgri);
  }

//   async pesquisar(request: Request, response: Response) {
//     const { id } = request.query; // GET /prod_agri?id=1; o query vem da URL
//     const prodAgriList = await prismaClient.prod_Agri.findMany({
//       where: {
//         nome: {
//           contains: String(nome), // Exibe uma lista de registros com o nome parecido
//         },
//         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
//       take: 4, // Limita o resultado a 4 registros
//     });

//     return response.json(prodAgriList);
//   }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;

    const prodAgri = await prismaClient.prod_Agri.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!prodAgri) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    await prismaClient.prod_Agri.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json("Registro excluído com sucesso");
  }
}
