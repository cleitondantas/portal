import { AreaUsuarios } from "./areaUsuarios";
import { PerfilUsuario } from "./perfilUsuario";

export class UsuarioAccess{
    codUsuario:string;
    id:number;
    descNomeUsuario:string;
    areaUsuarios: AreaUsuarios;
    perfilUsuario:PerfilUsuario;
    isAtivo:boolean;
    dtCadastro:string;
}