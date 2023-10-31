import { NextFunction, Request, Response } from "express";
import { prismaClient } from '../databases/prismaClient'

export const proprio =async(request:Request,response: Response, next: NextFunction)=>{
    const authenticatedUserId = request.user.id; // Supondo que você tenha o ID do usuário autenticado disponível no request
    const { id_user } = request.body;

    if (Number(id_user) !== authenticatedUserId) {
        return response.status(403).json({
            error: "Você não tem permissão para criar este recurso para outro usuário"
        });
    }

    next();
}
