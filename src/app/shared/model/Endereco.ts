import { Estado } from "./Estado";
import { Municipio } from "./Municipio";

export class Endereco {

    estados: Estado;
    municipios: Municipio;
    logradouro: string;
    numero: string;
}