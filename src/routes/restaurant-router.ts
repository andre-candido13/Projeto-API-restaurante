import { Router } from "express";
import { createRestaurant } from "../controllers/restaurant-controller";


const restaurantRouter = Router();

restaurantRouter.post('/restaurant', createRestaurant);



export default restaurantRouter;