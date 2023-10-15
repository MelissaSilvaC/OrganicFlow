import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class Relatorio2Controller {
  async criar(request: Request, response: Response) {
    const { nome, local, ingrediente, praticas, dt_processamento, dt_embalagem,id_linha, medalha } = request.body;

    const embalagem = await prismaClient.embalagem.create({
      data: {
        nome,
        local,
        ingrediente,
        praticas,
        dt_processamento,
        dt_embalagem,
        medalha,
        user: { connect: { id:Number(request.user.id) } }, // Conecta com o usuário que está criando o registro
        linha: {
          connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
        }
      },
    });

    return response.json(embalagem);
  }

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, local, ingrediente, praticas, dt_processamento, dt_embalagem,medalha } = request.body;

    let embalagem = await prismaClient.embalagem.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });
    
    if (!embalagem) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    embalagem = await prismaClient.embalagem.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        local,
        ingrediente,
        praticas,
        dt_processamento,
        dt_embalagem,
        medalha
      },
    });

    return response.json(embalagem);
  }

//   async pesquisar(request: Request, response: Response) {
//     const { nome } = request.query; // GET /embalagem?nome=Embalagem1; o query vem da URL
//     const embalagemList = await prismaClient.Embalagem.findMany({
//       where: {
//         nome: {
//           contains: String(nome), // Exibe uma lista de registros com o nome parecido
//         },
//         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
//       },
//       take: 4, // Limita o resultado a 4 registros
//     });

//     return response.json(embalagemList);
//   }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;

    const embalagem = await prismaClient.embalagem.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!embalagem) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    await prismaClient.embalagem.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json("Registro excluído com sucesso");
  }
}
