import { faker } from "@faker-js/faker";

export function getUsuario(seed: number): Usuario {
  faker.seed(seed);
  let bday = faker.date.birthdate();
  return {
    id: seed,
    email: faker.internet.email(),
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    telefone: faker.phone.number(),
    data_nasc: `${bday.getFullYear()}-${bday.getMonth() + 1}-${bday.getDate()}`,
  };
}

export interface Usuario {
  id: number;
  email: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  data_nasc: string;
}
