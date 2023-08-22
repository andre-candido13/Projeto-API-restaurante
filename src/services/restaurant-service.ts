import restaurantRepository from "../repositories/restaurant-repository.js";
import { conflictError, notFoundError } from "../errors/conflict-error.js";



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

async function createWorkTime (restaurante_id: number, dia_da_semana: string, horario_inicio: string, horario_fim: string) {

    const isThereId = restaurantRepository.getWorkTimeById(restaurante_id)
    
    if (!isThereId) throw notFoundError()
    
    
        const restaurantTime = restaurantRepository.createWorkTime(restaurante_id, dia_da_semana, horario_inicio, horario_fim)

        return restaurantTime

 
}


const restauranteService = {
    CreateRestaurant,
    getRestaurant,
    createWorkTime
}

export default restauranteService;