import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaClient = new PrismaClient();

export class Relatorio5Controller {
  async criar(request: Request, response: Response) {
    const { nome, local, dt_chegada,id_linha } = request.body;

    const varejo = await prismaClient.varejo.create({
      data: {
        nome,
        local,
        dt_chegada,
        user: { connect: { id: Number(request.user.id) } }, // Conecta com o usuário que está criando o registro
        linha: {
          connect: { id: Number(id_linha) } // Conecta com o id_linha obtido do corpo da requisição
        }
      },
    });

    return response.json(varejo);
  }

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, local, dt_chegada } = request.body;

    let varejo = await prismaClient.varejo.findFirst({
      where: {
        id: Number(id),
        user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!varejo) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    varejo = await prismaClient.varejo.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        local,
        dt_chegada,
      },
    });

    return response.json(varejo);
  }

//   async pesquisar(request: Request, response: Response) {
//     const { nome } = request.query; // GET /varejo?nome=Loja1; o query vem da URL
//     const varejoList = await prismaClient.varejo.findMany({
//       where: {
//         nome: {
//           contains: String(nome), // Exibe uma lista de registros com o nome parecido
//         },
//         user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
//       },
//     });

//     return response.json(varejoList);
//   }

    // async consultar(request:Request, response:Response){
    //     try {
    //         const varejo = await prismaClient.varejo.findMany({
                
    //         })
    //         return response.json(varejo)
            
    //     } catch (error) {
    //         return response.json(error)
    //     }
            
    // } 

  async deletar(request: Request, response: Response) {
    const { id } = request.params;

    const varejo = await prismaClient.varejo.findFirst({
      where: {
        id: Number(id),
        user: { id: Number(request.user.id) }, // Verifica se o registro pertence ao usuário autenticado
      },
    });

    if (!varejo) {
      return response.json({
        error: "Registro não encontrado ou não pertence ao usuário autenticado",
      });
    }

    await prismaClient.varejo.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json("Registro excluído com sucesso");
  }
}
