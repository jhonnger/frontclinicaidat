import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RolService} from "../../services/rol.service";
import {AuthService} from "../../services/auth.service";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  formulario: FormGroup;
  roles: any[] = [];
  usuarios: any[] = [];
  sexos: any[] = ["Femenino", "Masculino"];

  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'sexo', 'celular', 'dni', 'login'];

  constructor(private fb: FormBuilder,
              private rolService: RolService,
              private usuarioService: UsuarioService,
              private authService: AuthService) {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      password: ['', Validators.required],
      sexo: ['', Validators.required],
      login: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }

  listarUsuarios(){
    this.usuarioService.listarUsuarios().subscribe((data: any) => {
      console.log(data)
      this.usuarios = data;
      // this.formulario.setValue(data[0])
    })
  }

  cargarDatos(element: any){

    this.formulario.setValue({
      usuario: element.login,
      password: element.password,
      apellidos: element.apellido,
      rol: null,
      nombre: element.nombre,
      dni: element.dni,
      sexo: element.sexo,
      login: element.login,

    })
  }
  guardar(){

  }

  ngOnInit(): void {
    this.listarUsuarios();
  }
}
