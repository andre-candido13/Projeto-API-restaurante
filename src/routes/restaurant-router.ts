import { Router} from "express";
import { createRestaurant, createWorkTime, getRestaurant } from "../controllers/restaurant-controller.js";



const restaurantRouter = Router();

restaurantRouter.post('/rest', createRestaurant);
restaurantRouter.get('/rest', getRestaurant)
restaurantRouter.post('/horario', createWorkTime)


export { restaurantRouter }