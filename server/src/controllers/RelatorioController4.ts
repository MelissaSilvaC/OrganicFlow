import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class Relatorio4Controller {
  async criar(request: Request, response: Response) {
    const { nome, local, praticas, responsavel, dt_entrada, dt_saida,id_linha } = request.body;
    const date = new Date();
    // Obtém a data no formato desejado (dia/mes/ano)
    const formattedDate = date.toLocaleDateString('pt-BR'); // Adapte o locale conforme necessário

    const armazenamento = await prismaClient.armazenamento.create({
      data: {
        nome,
        local,
        praticas,
        responsavel,
        dt_entrada,
        dt_saida,
        
        user: { connect: { id:Number(request.user.id) } }, // Conecta com o usuário que está criando o registro
        linha: {
          connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
        },
        date:formattedDate, 
      },
    });

    return response.json(armazenamento);
  }

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, local, praticas, responsavel, dt_entrada, dt_saida } = request.body;

    let armazenamento = await prismaClient.armazenamento.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!armazenamento) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    armazenamento = await prismaClient.armazenamento.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        local,
        praticas,
        responsavel,
        dt_entrada,
        dt_saida,
        
      },
    });

    return response.json(armazenamento);
  }

//   async pesquisar(request: Request, response: Response) {
//     const { nome } = request.query; // GET /armazenamento?nome=Armazem1; o query vem da URL
//     const armazenamentoList = await prismaClient.armazenamento.findMany({
//       where: {
//         nome: {
//           contains: String(nome), // Exibe uma lista de registros com o nome parecido
//         },
//         user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
//       },
//       take: 4, // Limita o resultado a 4 registros
//     });

//     return response.json(armazenamentoList);
//   }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;

    const armazenamento = await prismaClient.armazenamento.findFirst({
      where: {
        id: Number(id),
        user: { id:Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!armazenamento) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    await prismaClient.armazenamento.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json("Registro excluído com sucesso");
  }
}
