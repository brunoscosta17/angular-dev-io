import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { ViewChildren } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';

import { CustomValidators } from 'ng2-validation';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';

import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario!: Usuario ;
  formResult: string = '';
  MASKS = utilsBr.MASKS;

  isNameValid: any;
  isCpfValid: any;
  isEmailValid: any;
  isPasswordValid: any;
  isConfirmPasswordValid: any;

  validationMessages: ValidationMessages = {};
  genericValidator!: GenericValidator;
  displayMessage: DisplayMessage = {};

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];  

  constructor(private formBuilder: FormBuilder) {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirm
    });

    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

  }

  ngOnInit(): void {

    this.cadastroForm.valueChanges.subscribe((x: any) => {
      this.isNameValid = this.cadastroForm.get('nome')?.valid;
      this.isCpfValid = this.cadastroForm.get('cpf')?.valid;
      this.isEmailValid = this.cadastroForm.get('email')?.valid;
      this.isPasswordValid = this.cadastroForm.get('senha')?.valid;
      this.isConfirmPasswordValid = this.cadastroForm.get('senhaConfirmacao')?.valid;
   })

  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else {
      this.formResult = "Não submeteu!!!"
    }
  }

}
