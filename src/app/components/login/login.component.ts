import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //VARIABLES
  formul: FormGroup;
  mensajeError: string = "";

  constructor(
    private router: Router
  ) { 
    this.formul = new FormGroup({
      nombre: new FormControl(),
      clave: new FormControl() 
  });
  }

  ngOnInit(): void {}

  onSubmit(){
    if(this.validadorUsuario()){
      this.router.navigate(['/admin']);
    }
  }

  //SE DEBERÍA USAR UN "FormBuilder" Y "Validator" PARA VALIDAR, POR LAS PRISAS USO CONDICIONALES
  validadorUsuario(){
    if(this.formul.value.nombre === "carlos" && this.formul.value.clave === "123"){
      return true;
    }else if(this.formul.value.nombre === null || this.formul.value.clave === null){
      this.mensajeError = "No se permiten campos vacíos.";
      return false;
    }else if(this.formul.value.nombre !== "carlos" || this.formul.value.clave !== "123"){
      this.mensajeError = "Usuario/Contraseña incorrectas.";
      return false;
    }
    return null;
  }
}
