import { ContatoForm } from "./ContatoForm";
import { EnderecoForm } from "./EnderecoForm";

export class DoadorForm {
    
    nome: string;
    sexo: string;
    endereco: EnderecoForm;
    contato: ContatoForm;
    ehDoador: boolean;
    idTipoSanguineo: number;
    
}