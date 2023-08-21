import restaurantRepository from "../repositories/restaurant-repository";
import { conflictError } from "../errors/conflict-error";



async function CreateRestaurant (nome: string, foto: string, endereco: string): Promise<void> {

    const isThereRestaurant = await restaurantRepository.CheckRestaurant(nome)

    if(isThereRestaurant.rowCount !== 0) throw conflictError()


    const restaurant = restaurantRepository.CreateRestaurant(nome, foto, endereco)

    return restaurant

}


const restauranteService = {
    CreateRestaurant
}

export default restauranteService;