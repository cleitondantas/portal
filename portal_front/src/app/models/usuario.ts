import { Role } from "./role";

export class Usuario {
    id: number;
    password: string;
    login: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    cpf:string;
    email:string;
    isAtivo:boolean;
    perfis: Role[];
}