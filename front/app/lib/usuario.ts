export interface Usuario {
  id: number;
  email: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  data_nasc: string;
}

export interface UsuarioSimples {
  id: number;
  email: string;
}
