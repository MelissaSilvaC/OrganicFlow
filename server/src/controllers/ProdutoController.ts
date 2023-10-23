import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME , // Substitua com seu nome de nuvem Cloudinary
  api_key: process.env.CLOUDINARY_API_KEY, // Substitua com sua chave de API Cloudinary
  api_secret: process.env.CLOUDINARY_API_SECRET, // Substitua com seu segredo de API Cloudinary
});

const prismaClient = new PrismaClient();

export class ProdutoController {
  async criar(request: Request, response: Response) {
    const { nome } = request.body;

    try {
      // Verifica se foi enviado um arquivo de imagem
      if (request.file) {
        const result = await cloudinary.v2.uploader.upload(request.file.path); // Faz upload da imagem para o Cloudinary
  
        const produto = await prismaClient.produto.create({
          data: {
            nome,
            photo: result.secure_url, // Armazena a URL da imagem no banco de dados
            user: { connect: { id: Number(2) } }, // Conecta com o usuário que está criando o registro
          },
        });
  
        return response.json(produto);
      }
  
      // Se não foi enviado um arquivo, retorna um erro
      return response.status(400).json({ error: 'Nenhuma imagem enviadas' });
    } catch (error) {
      console.error('Error creating product:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
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

      const produto =await prismaClient.produto.findFirst({
        where:{
          id:Number(id)
        },
        include:{
          Linha:{
            orderBy:{
              id:'desc'
            }
          }
        }
      })

      if(!produto){
        return response.json('erro')
      }

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
