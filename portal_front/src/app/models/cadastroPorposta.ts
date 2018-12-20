import { Area } from "./area";
import { Cliente } from "./cliente";
import { Modalidade } from "./modalidade";
import { Canal } from "./canal";
import { Segmento } from "./segmento";
import { InstiruicaoFinanceiras } from "./instituicaoFinanceira";
import { TipoImovel } from "./tipoImovel";
import { Municipio } from "./municipio";

export class CadastroProposta {
    id: number;
    codCadastro: string;
    nContrato: string;
    numProposta: string;
    cliente:Cliente;
    modalidade:Modalidade;
    canal:Canal;
    segmento:Segmento;
    instiruicaoFinanceiras: InstiruicaoFinanceiras;
    tipoImovel:TipoImovel;
    numAgencia: string;
    nomeGerente: string;
    matriculaImovel: string;
    cartorioMatricula: string;
    municipio:Municipio;
    area:Area;
    blocoEmpreendimento: string;
    unidadeEmpreendimento: string;
    nPlanoEmpresario: string;
    isAtivoPlanoEmpresario: boolean;
    isLiquidadoPlanoEmpresario: boolean;
    dtCadastro: string;
    codUsuario: string;
    dtLiquidacaoPe: string;

}