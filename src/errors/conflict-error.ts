import { ApplicationError } from "../protocols";



export function conflictError(): ApplicationError {
  return {
    name: 'ConflictError',
    message: 'Restaurante já existente',
  };
}
