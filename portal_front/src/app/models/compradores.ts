import { Contatos } from './contatos';

export class Compradores {
    cpfcnpj: string;
    codtipocliente: any;
    nomecliente: string;
    ndocumento: string;
    orgaoexpedidor: any;
    dataexpedicao: Date;
    datanascimento: Date;
    codestadocivil: any;
    nacionalidade: string;
    profissao: string;
    cepresidencial: string;
    uf: any;
    cidade: string;
    bairro: string;
    endereco: string;
    complemento: string;
    numeroendereco: string;
    codusuario: string;
    datacadastro: Date;
    valorrenda: number;
    contatos: Contatos[];
    principal = false;
}
