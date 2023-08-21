import { Response, Request } from "express";
import httpStatus from "http-status";
import restauranteService from "../services/restaurant-service";


export async function createRestaurant (req: Request, res: Response) {

const { nome, foto, endereco } = req.body;

try {

    const restaurant = await restauranteService.CreateRestaurant(nome, foto, endereco)

        return res.sendStatus(httpStatus.CREATED).send(restaurant)


} catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
}

}