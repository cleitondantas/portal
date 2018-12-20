import { Contatos } from "./contatos";

export class Compradores {
    cpfcnpj: string;
    codtipocliente: number;
    nomecliente: string;
    ndocumento: string;
    orgaoexpedidor: string;
    dataexpedicao: string;
    datanascimento: string;
    codestadocivil: number;
    nacionalidade: string;
    profissao: string;
    cepresidencial: string;
    uf: string;
    cidade: string;
    bairro: string;
    endereco: string;
    complemento: string;
    numeroendereco: string;
    codusuario: string;
    datacadastro: string;
    valorrenda: number;
    contatos: Contatos[];
    principal: boolean = false;
}
