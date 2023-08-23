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

    const isThereId = await restaurantRepository.getWorkTimeById(restaurante_id)
    
    if (isThereId.rows.length === 0) throw notFoundError()
    
    
        const restaurantTime = await restaurantRepository.createWorkTime(restaurante_id, dia_da_semana, horario_inicio, horario_fim)

        return restaurantTime

 
}

async function getWorkTime() {

    const workTime = restaurantRepository.getWorkTime()

    return workTime
}


const restauranteService = {
    CreateRestaurant,
    getRestaurant,
    createWorkTime,
    getWorkTime
}

export default restauranteService;