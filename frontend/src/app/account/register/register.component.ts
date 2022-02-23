import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user';
import { AccountService } from '../services/account.service';

import { CustomValidators } from 'ngx-custom-validators';
import { ElementRef } from '@angular/core';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { ViewChildren } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends FormBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  form!: FormGroup;
  user!: User

  errors: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService) {
      super();
      this.validationMessages = {
        email: {
          required: 'Informe o e-mail',
          email: 'Email inválido'
        },
        password: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
        },
        passwordConfirm: {
          required: 'Informe a senha novamente',
          rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
          equalTo: 'As senhas não conferem'
        }
      };
      super.configMessagesValidationBase(this.validationMessages);
    }

  ngOnInit(): void {
    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let passwordConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: password,
      passwordConfirm: passwordConfirm
    });
  }

  ngAfterViewInit(): void {
    super.configValidationFormBase(this.formInputElements, this.form);
  }

  register() {
    if (this.form.dirty && this.form.valid) {
      this.user = Object.assign({}, this.user, this.form.value);

      this.accountService.registerUser(this.user)
        .subscribe(
          success => { this.processSuccess(success) },
          error => { this.processError(error) }
        );

      // this.mudancasNaoSalvas = false;
    }
  }

  processSuccess(response: any) {

  }

  processError(error: any) {

  }


}
