import restaurantRepository from "../repositories/restaurant-repository.js";
import { conflictError } from "../errors/conflict-error.js";



async function CreateRestaurant (nome: string, foto: string, endereco: string): Promise<void> {

    const isThereRestaurant = await restaurantRepository.CheckRestaurant(nome)

    if(isThereRestaurant.rowCount !== 0) throw conflictError()


    const restaurant = restaurantRepository.CreateRestaurant(nome, foto, endereco)

    return restaurant

}

async function getRestaurant () {

    const restaurant = await restaurantRepository.GetRestaurant()

    return restaurant
}


const restauranteService = {
    CreateRestaurant,
    getRestaurant
}

export default restauranteService;