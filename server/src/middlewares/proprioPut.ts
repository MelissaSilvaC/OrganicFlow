import { NextFunction, Request, Response } from "express";
import { prismaClient } from '../databases/prismaClient'

export const proprioput =async(request:Request,response: Response, next: NextFunction)=>{
    const { id } = request.params;
    const authenticatedUserId = request.user.id; // Supondo que você tenha o ID do usuário autenticado disponível no request

    if (Number(id) !== authenticatedUserId) {
        return response.status(403).json({
            error: "Você não tem permissão para acessar este recurso"
        });
    }

    next();
}
