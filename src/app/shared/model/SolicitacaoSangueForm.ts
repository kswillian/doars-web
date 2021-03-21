export class SolicitacaoSangueForm {

    idEntidade: number;
    tipoSanguineosList: number[];
    descricao: string;
    distancia: number;
    
    constructor(idEntidade: number, tipoSanguineosList: number[], descricao: string, distancia: number){
        this.idEntidade = idEntidade;
        this.tipoSanguineosList = tipoSanguineosList;
        this.descricao = descricao;
        this.distancia = distancia;
    }
}