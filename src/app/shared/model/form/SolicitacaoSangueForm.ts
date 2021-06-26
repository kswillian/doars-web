export class SolicitacaoSangueForm {

    idEntidade: number;
    tiposSanguineos: number[];
    descricao: string;
    distancia: number;
    
    constructor(idEntidade: number, tiposSanguineos: number[], descricao: string, distancia: number){
        this.idEntidade = idEntidade;
        this.tiposSanguineos = tiposSanguineos;
        this.descricao = descricao;
        this.distancia = distancia;
    }
}