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



const restaurantRepository = {
CheckRestaurant,
CreateRestaurant,
GetRestaurant

}

export default restaurantRepository;