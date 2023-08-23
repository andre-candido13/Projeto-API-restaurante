import { QueryResult } from "pg";
import { db } from "../database/database-connection.js";


async function CheckRestaurant (nome: string): Promise<QueryResult> {

const isThereRestaurant:QueryResult = await db.query('SELECT nome FROM restaurantes WHERE "nome"=$1', [nome])

    return isThereRestaurant

}

async function CreateRestaurant (nome:string, foto: string, endereco: string) {

        await db.query('INSERT INTO restaurantes ("nome", "foto", "endereco") VALUES ($1, $2, $3)'
    , [nome, foto, endereco])


}

async function GetRestaurant () {

   const restaurant: QueryResult = await db.query('SELECT * FROM restaurantes');

   return restaurant.rows

}

async function createWorkTime (restaurante_id: number, dia_da_semana: string, horario_inicio: string, horario_fim: string) {

    const time = await db.query('INSERT INTO horariosfuncionamento ("restaurante_id", "dia_da_semana", "horario_inicio", "horario_fim") VALUES ($1, $2, $3, $4)',
    [restaurante_id, dia_da_semana, horario_inicio, horario_fim])

    return time.rows

}

async function getWorkTimeById (restaurante_id: number) {

    const horario = await db.query('SELECT * FROM horariosfuncionamento WHERE restaurante_id=$1',[restaurante_id])
    return horario.rows[0]
}

async function getWorkTime() {

    const workTime = await db.query('SELECT * FROM horariosfuncionamento')

    return workTime.rows
}



const restaurantRepository = {
CheckRestaurant,
CreateRestaurant,
GetRestaurant,
createWorkTime,
getWorkTimeById,
getWorkTime

}

export default restaurantRepository;