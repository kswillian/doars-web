import { Contato } from "./Contato";
import { Endereco } from "./Endereco";
import { TipoSanguineo } from "./TipoSanguineo";

export class Doador {

    id: number;
    nome: string;
    sexo: string;
    endereco: Endereco;
    contato: Contato;
    tipoSanguineo: TipoSanguineo;
    
}