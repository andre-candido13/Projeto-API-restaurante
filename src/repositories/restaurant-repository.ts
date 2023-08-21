import { QueryResult } from "pg";
import { db } from "../database/database-connection";


async function CheckRestaurant (nome: string): Promise<QueryResult> {

const isThereRestaurant:QueryResult = await db.query('SELECT "name" FROM "Restaurantes" WHERE "nome"=$1', [nome])

    return isThereRestaurant

}

async function CreateRestaurant (nome:string, foto: string, endereco: string) {

        await db.query('INSERT INTO "Restaurantes" ("nomes", "foto", "endereco") VALUE ($1, $2, $3)'
    , [nome, foto, endereco])


}



const restaurantRepository = {
CheckRestaurant,
CreateRestaurant

}

export default restaurantRepository;