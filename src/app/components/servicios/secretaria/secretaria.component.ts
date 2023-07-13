import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: []
})
export class SecretariaComponent implements OnInit {

  trabajadoresSecretaria: trabajadorDto[] = [];

  constructor() { }

  ngOnInit() {
    const trabajador1 = new trabajadorDto();
    trabajador1.correo = 'ja@gmail.com';
    trabajador1.nombre = 'Asunción Cascales Carrillo';
    trabajador1.departamento = 'SECRETARIA';
    trabajador1.grupoDepartamento = 'SERVICIOS';
    this.trabajadoresSecretaria.push(trabajador1);

    const trabajador2 = new trabajadorDto();
    trabajador2.correo = 'jb@gmail.com';
    trabajador2.nombre = 'Pedro Martinez Sanchez';
    trabajador2.departamento = 'SECRETARIA';
    trabajador2.grupoDepartamento = 'SERVICIOS';
    this.trabajadoresSecretaria.push(trabajador2);

    const trabajador3 = new trabajadorDto();
    trabajador3.correo = 'jc@gmail.com';
    trabajador3.nombre = 'Luis Campuzano Mendoza';
    trabajador3.departamento = 'SECRETARIA';
    trabajador3.grupoDepartamento = 'SERVICIOS';
    this.trabajadoresSecretaria.push(trabajador3);

    const trabajador4 = new trabajadorDto();
    trabajador4.correo = 'jd@gmail.com';
    trabajador4.nombre = 'David Molina Juárez';
    trabajador4.departamento = 'SECRETARIA';
    trabajador4.grupoDepartamento = 'SERVICIOS';
    this.trabajadoresSecretaria.push(trabajador4);
  }

}
