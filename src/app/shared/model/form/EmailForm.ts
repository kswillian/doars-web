export class EmailForm {

    nome: string;
    email: string;
    assunto: string;
    mensagem: string;

    constructor(nome: string, email: string, mensagem: string){
        this.nome = nome;
        this.email = email;        
        this.mensagem = mensagem;
    }
    
    addAssunto(assunto: string){
        this.assunto = assunto;
    }

}