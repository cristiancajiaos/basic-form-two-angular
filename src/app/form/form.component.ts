import { Component } from '@angular/core';
import { User } from '../classes/user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  public user = new User();

  public nombreControl: FormControl = new FormControl('', [Validators.required]);
  public apellidoControl: FormControl = new FormControl('', [Validators.required]);
  public emailControl: FormControl = new FormControl('', [Validators.required, Validators.email])

  public userForm: FormGroup = new FormGroup({});

  constructor() {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl
    });
  }

  public onSubmit(): void {
    this.user.nombre = this.userForm.controls["nombre"].value;
    this.user.apellido = this.userForm.controls["apellido"].value;
    this.user.email = this.userForm.controls["email"].value;
  }

  public resetForm(): void {
    this.user.nombre = '';
    this.user.apellido = '';
    this.user.email = '';

    this.userForm.reset();
    this.userForm.controls['nombre'].setValue('');
    this.userForm.controls['apellido'].setValue('');
    this.userForm.controls['email'].setValue('');

  }

}
