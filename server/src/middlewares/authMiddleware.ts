import { NextFunction, Request, Response } from "express";
import { prismaClient } from '../databases/prismaClient'
import jwt from 'jsonwebtoken'
 
export const authMiddleware =async(request:Request,response: Response, next: NextFunction)=>{
 
    type jwtPayload={
        id:number;
        permissions:number[];
        roles:number[];
    }
 
    const{authorization}=request.headers
    const{retornar}=request.headers
    // console.log('123')
    console.log(authorization)
            
    if(!authorization){
        return response.status(400).json({
            status:false,
            error:"não autorizado"
        })
            
    }
        
    const token = authorization.split(' ')[1]
    console.log(token)
 
    try {
        
        const { id, permissions, roles } = jwt.verify(token, process.env.JWT_PASS ?? "", { expiresIn: '10d' } as jwt.VerifyOptions) as jwtPayload 
 
        request.user={//salva dentro da interface esses parâmetros
            id,
            permissions,
            roles,
        }
 
        if(retornar){
            const user=await prismaClient.user.findFirst({
                where: {
                  id: Number(request.user.id),
              },
              
            })
            return response.json({status:true,user})
            
        }

        const usuario = await prismaClient.user.findUnique({
            where: { id: Number(request.user.id) },
        });

        if (!usuario) {
            return response.status(404).json({ message: 'Token inválido' });
        }

        if (usuario.ban) {
            return response.status(403).json({ message: 'Usuário banido.' });
        }
        
        next()//vai dizer que está tudo certo e vai prosseguir a função
        
    } catch (error) {
        return response.status(404).json({status:false ,message: 'Failed to authenticate token.',error})
    }
        
}