import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class Relatorio3Controller {
  async criar(request: Request, response: Response) {
    const { nome, praticas, dt_carregamento, dt_descarregamento, origem, destino,id_linha ,medalha } = request.body;

    const transporte = await prismaClient.transporte.create({
      data: {
        nome,
        praticas,
        dt_carregamento,
        dt_descarregamento,
        origem,
        destino,
        medalha,
        user: { connect: { id: Number(request.user.id) } }, // Conecta com o usuário que está criando o registro
        linha: {
          connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
        }
      },
    });

    return response.json(transporte);
  }

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, praticas, dt_carregamento, dt_descarregamento, origem, destino ,medalha } = request.body;

    let transporte = await prismaClient.transporte.findFirst({
      where: {
        id: Number(id),
        user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!transporte) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    transporte = await prismaClient.transporte.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        praticas,
        dt_carregamento,
        dt_descarregamento,
        origem,
        destino,
        medalha
      },
    });

    return response.json(transporte);
  }

//   async pesquisar(request: Request, response: Response) {
//     const { nome } = request.query; // GET /transporte?nome=Transporte1; o query vem da URL
//     const transporteList = await prismaClient.transporte.findMany({
//       where: {
//         nome: {
//           contains: String(nome), // Exibe uma lista de registros com o nome parecido
//         },
//         user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
//       },
//       take: 4, // Limita o resultado a 4 registros
//     });

//     return response.json(transporteList);
//   }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;

    const transporte = await prismaClient.transporte.findFirst({
      where: {
        id: Number(id),
        user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!transporte) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    await prismaClient.transporte.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json("Registro excluído com sucesso");
  }
}
