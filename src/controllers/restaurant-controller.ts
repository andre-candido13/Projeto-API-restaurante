import { Response, Request } from "express";
import httpStatus from "http-status";
import restauranteService from "../services/restaurant-service.js";


export async function createRestaurant (req: Request, res: Response) {

const { nome, foto, endereco } = req.body;

try {

        await restauranteService.CreateRestaurant(nome, foto, endereco)

        return res.sendStatus(httpStatus.CREATED)


} catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
}

}

export async function getRestaurant (req: Request, res: Response) {

    try {

        const restaurant = await restauranteService.getRestaurant()
        
        return res.send(restaurant)

    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
}


export async function createWorkTime (req: Request, res: Response) {

    const { restaurante_id} = req.body

    const { dia_da_semana, horario_inicio, horario_fim } = req.body
 
    try {

        const horarioFuncionamento = restauranteService.createWorkTime(restaurante_id, dia_da_semana, horario_inicio, horario_fim)

        return res.send(httpStatus.CREATED).send(horarioFuncionamento)

        

    } catch (error) {

        res.status(httpStatus.BAD_REQUEST).send(error.message)

    }

}