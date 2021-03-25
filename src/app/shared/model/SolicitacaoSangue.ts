import { Entidade } from "./Entidade";
import { TipoSanguineo } from "./TipoSanguineo";

export class SolicitacaoSangue {

    id: number;
    descricao: string;
    entidade: Entidade;
    tipoSanguineosList: TipoSanguineo[];
    doadoresNotificados: number;
    dataRegistro: string;

}