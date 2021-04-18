import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/service/email.service';
import { EmailForm } from 'src/app/shared/model/form/EmailForm';

@Component({
  selector: 'app-web-formulario-email',
  templateUrl: './web-formulario-email.component.html',
  styleUrls: ['./web-formulario-email.component.css']
})
export class WebFormularioEmailComponent implements OnInit {

  nome: string;
  email: string;
  mensagem: string;

  emailForm: EmailForm;

  message = '';
  success: boolean = false;  

  constructor(
    private modal: NgbModal,
    private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail(){   

    this.prepareEmail(); 
    this.emailService.sendMail(this.emailForm).subscribe( response => {
      
      this.success = true;
      this.clearFields();   
      this.message = 'E-mail enviado com sucesso!';
      
    }, error => {
      
      if(error.status = 400){
        this.message = 'Favor preencher todos os campos corretamente!';
      }else{
        this.message = 'Algo deu errado, favor tentar novamente mais tarde!';
      }

      this.success = false;
      this.clearFields();       

    });

  }

  prepareEmail(){
    this.emailForm = new EmailForm(this.nome, this.email, this.mensagem);
    this.emailForm.addAssunto("Dúvida");
  }

  clearFields(){
    this.nome = '';
    this.email = '';
    this.mensagem = '';
  }

  close() {
    this.modal.dismissAll();
  }  

}
