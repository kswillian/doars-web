import { Entidade } from "./Entidade";
import { TipoSanguineo } from "./TipoSanguineo";

export class SolicitacaoSangue {

    id: number;
    descricao: string;
    entidade: Entidade;
    tiposSanguineos: TipoSanguineo[];
    doadoresNotificados: number;
    dataRegistro: string;

}