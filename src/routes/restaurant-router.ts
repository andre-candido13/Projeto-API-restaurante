import { Router} from "express";
import { createRestaurant, getRestaurant } from "../controllers/restaurant-controller.js";



const restaurantRouter = Router();

restaurantRouter.post('/rest', createRestaurant);
restaurantRouter.get('/rest', getRestaurant)


export { restaurantRouter }