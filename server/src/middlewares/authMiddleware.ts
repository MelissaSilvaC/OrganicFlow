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
    // console.log('123')
    // console.log(authorization)
            
    if(!authorization){
        return response.json({
            status:false,
            error:"não autorizado"
        })
            
    }
        
    const token = authorization.split(' ')[1]
    console.log(token)
 
    try {
        const {id,permissions,roles}=jwt.verify(token, process.env.JWT_PASS ?? "") as jwtPayload//verifica o token
        console.log(id,permissions,roles)
 
        request.user={//salva dentro da interface esses parâmetros
            id,
            permissions,
            roles,
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
        return response.json({status:false ,message: 'Failed to authenticate token.',error})
    }
        
}