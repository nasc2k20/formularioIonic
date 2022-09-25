import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})

export class PersonsPage implements OnInit {

  get nombrePerson() {
    return this.formularioRegistro.get('nombrePerson');
  }
  get apellidoPerson() {
    return this.formularioRegistro.get('apellidoPerson');
  }
  get correoPerson() {
    return this.formularioRegistro.get('correoPerson');
  }
  get telefonoPerson() {
    return this.formularioRegistro.get('telefonoPerson');
  }
  get contrasenaPerson() {
    return this.formularioRegistro.get('contrasenaPerson');
  }

  public errorMensaje = {
    nombrePerson: [{ type: 'required', message: 'El Nombre es Requerido' }],
    apellidoPerson: [{ type: 'required', message: 'El Apellido es Requerido' }],
    correoPerson: [{ type: 'required', message: 'El Correo es Requerido' },
    { type: "pattern", message: "Por favor Ingresar una direccion de correo valida" }],
    telefonoPerson: [{ type: 'required', message: 'El Telefono es Requerido' }],
    contrasenaPerson: [{ type: 'required', message: 'La Contraseña es Requerido' }]
  }

  formularioRegistro = this.formBuilder.group({
    nombrePerson: ['', [Validators.required, Validators.maxLength(100)]],
    apellidoPerson: ['', [Validators.required]],
    correoPerson: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
    telefonoPerson: ['', [Validators.required]],
    contrasenaPerson: ['', [Validators.required]]
  });


  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private route : Router) { }

  /*
  public submit() {
    console.log(this.formularioRegistro.value);
  }
  */

  enviarParametrosDetalle(formularioRegistro : any ){
    console.log(formularioRegistro.value);

    /*let datosEnviar : NavigationExtras = {
      state : {
        formPerson : formularioRegistro.value
      }
    };*/
    this.route.navigate(['detalle-datos'], formularioRegistro.value);
  }

  ngOnInit() {
  }

}
