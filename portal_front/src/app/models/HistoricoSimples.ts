export class HistoricoSimples{

    constructor(id:number,nomeCliente: string,codCadastro:string,nContrato:string,numProposta:string,
        area: string,status:string,subStatus:string,atividade:string,obs:string){
        this.id= id;
        this.nomeCliente = nomeCliente;
        this.area = area;
        this.codCadastro = codCadastro;
        this.nContrato = nContrato;
        this.numProposta= numProposta;
        this.subStatus = subStatus;
        this.status = status;
        this.atividade = atividade;
        this.obs = obs;
    }

    id: number;
    nomeCliente: string;
    codCadastro:string;
    nContrato:string;
    numProposta:string;
    area: string;
    status:string;
    subStatus:string;
    atividade:string;
    obs:string;
}

