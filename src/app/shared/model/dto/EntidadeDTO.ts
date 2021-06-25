import { Contato } from "../Contato";
import { Endereco } from "../Endereco";

export class EntidadeDTO {

    id: number;
    nome: string;
    cnpj: string;
    tipoEntidade: string;
    descricao: string;
    contato: Contato;
    endereco: Endereco;    
    horaFinalFuncionamento: Date;
    horaInicialFuncionamento: Date;
    dataRegistro: Date;
    diasSemanaList: Array<string>;

}