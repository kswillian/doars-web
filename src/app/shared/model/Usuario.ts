export class Usuario {

    email: string;
    perfil: string;
    senha: string;

    constructor(email: string, perfil: string, senha: string){
        this.email = email;
        this.perfil = perfil;
        this.senha = senha;
    }
}