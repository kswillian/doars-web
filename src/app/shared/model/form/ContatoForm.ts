export class ContatoForm {

    email: string;
    telefone: string;
    celular: string;

    constructor(email: string, telefone: string, celular: string){
        this.email = email;
        this.telefone = telefone;
        this.celular = celular;
    }
}