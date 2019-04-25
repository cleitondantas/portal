import { Role } from './role';

export class Usuario {
    id: number;
    codUsuario: string;
    password: string;
    login: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    cpf: string;
    email: string;
    isAtivo: boolean;
    perfis: Role[];
}
