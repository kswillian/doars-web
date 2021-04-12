export class EnderecoForm {

    idEstado: number;
    idMunicipio: number;
    logradouro: string;
    numero: string;

    constructor(estado: number, municipio: number, logradouro: string, numero: string){
        this.idEstado = estado;
        this.idMunicipio = municipio;
        this.logradouro = logradouro;
        this.numero = numero;
    }
}