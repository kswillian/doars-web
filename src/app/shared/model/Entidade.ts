import { Contato } from "./Contato";
import { Endereco } from "./Endereco";

export class Entidade {

    id: number;
    nome: string;
    cnpj: string;
    tipoEntidade: string;
    descricao: string;
    diasSemana: string[];
    horaInicialFuncionamento: Date;
    horaFinalFuncionamento: Date;
    endereco: Endereco;
    contato: Contato;
    dataRegistro: Date;
    
}