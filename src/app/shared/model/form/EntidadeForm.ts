import { Usuario } from "../Usuario";
import { ContatoForm } from "./ContatoForm";
import { EnderecoForm } from "./EnderecoForm";

export class EntidadeForm {

    nome: string;
    cnpj: string;
    tipoEntidade: string;
    descricao: string;
    contato: ContatoForm;
    endereco: EnderecoForm;
    usuario: Usuario;
    horaFinalFuncionamento: Date;
    horaInicialFuncionamento: Date;
    diasSemanaList: Array<string>;

}