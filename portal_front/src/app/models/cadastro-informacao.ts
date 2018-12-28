import { Compradores } from "./compradores";

export class CadastroInformacao {
    codoriginacao: number;
    codcadastroincorporadora: string;
    incorporadora: {
        codincorporadora: number;
        descincorporadora: string;
    }
    codempreendimento: number;
    blocotorre: string;
    unidade: string;
    valorvenda: number;
    saldodevedor: number;
    codusuario: number;
    datacadastro: string;
    vagaautomovel: string;
    box: string;
    numeroapartamento: string;
    cep: string;
    numero: string;
    bairro: string;
    cidade: string;
    endereco: string;
    complemento: string;
    uf: any;
    clientes: Compradores[];

}
