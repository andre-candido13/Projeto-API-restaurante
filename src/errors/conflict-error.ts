import { ApplicationError } from "../protocols.js";



export function conflictError(): ApplicationError {
  return {
    name: 'ConflictError',
    message: 'Restaurante já existente',
  };
}
