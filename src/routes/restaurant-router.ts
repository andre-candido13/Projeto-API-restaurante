import { Router} from "express";
import { createRestaurant, createWorkTime, getRestaurant, getWorkTime } from "../controllers/restaurant-controller.js";



const restaurantRouter = Router();

restaurantRouter.post('/rest', createRestaurant);
restaurantRouter.get('/rest', getRestaurant)
restaurantRouter.post('/horario', createWorkTime)
restaurantRouter.get('/horario', getWorkTime)


export { restaurantRouter }