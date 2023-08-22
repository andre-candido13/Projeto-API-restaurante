import { ApplicationError } from "../protocols.js";



export function conflictError(): ApplicationError {
  return {
    name: 'ConflictError',
    message: 'Restaurante já existente',
  };
}

export function notFoundError(): ApplicationError {

return {
  name: 'NotFoundError',
  message: 'Id não encontrado',
}

}
