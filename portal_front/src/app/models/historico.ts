import { CadastroProposta } from './cadastroPorposta';
import { Area } from './area';
import { Status } from './status';
import { SubStatus } from './subStatus';
import { UsuarioAccess } from './usuarioAccess';


export class Historico {

    id: number;
    cadastroProposta: CadastroProposta;
    area: Area;
    status: Status;
    subStatus: SubStatus;
    obs: string;
    dtAtividade: string;
    usuarioAccess: UsuarioAccess;
}
