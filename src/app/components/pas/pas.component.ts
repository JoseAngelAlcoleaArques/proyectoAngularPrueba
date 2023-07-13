import {Component, OnInit, ViewChild} from '@angular/core';
import {trabajadorDto} from '../../types/trabajador-dto';
import {TrabajadoresService} from '../../services/trabajadores-service';

@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.css']
})
export class PasComponent implements OnInit {

  trabajadoresPas: trabajadorDto[] = [];

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    const trabajador1 = new trabajadorDto();
    trabajador1.correo = 'ja@gmail.com';
    trabajador1.nombre = 'Jose Ánge Alcolea Arques';
    trabajador1.departamento = 'ATENCION AL USUARIO';
    trabajador1.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador1);

    const trabajador2 = new trabajadorDto();
    trabajador2.correo = 'jb@gmail.com';
    trabajador2.nombre = 'Pedro Martinez Sanchez';
    trabajador2.departamento = 'ATENCION AL USUARIO';
    trabajador2.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador2);

    const trabajador3 = new trabajadorDto();
    trabajador3.correo = 'jc@gmail.com';
    trabajador3.nombre = 'Luis Campuzano Mendoza';
    trabajador3.departamento = 'ATENCION AL USUARIO';
    trabajador3.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador3);

    const trabajador4 = new trabajadorDto();
    trabajador4.correo = 'jd@gmail.com';
    trabajador4.nombre = 'David Molina Juárez';
    trabajador4.departamento = 'ATENCION AL USUARIO';
    trabajador4.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador4);

    const trabajador5 = new trabajadorDto();
    trabajador5.correo = 'ja@gmail.com';
    trabajador5.nombre = 'Asunción Cascales Carrillo';
    trabajador5.departamento = 'INFORMATICA';
    trabajador5.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador5);

    const trabajador6 = new trabajadorDto();
    trabajador6.correo = 'jb@gmail.com';
    trabajador6.nombre = 'Pedro Martinez Sanchez';
    trabajador6.departamento = 'INFORMATICA';
    trabajador6.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador6);

    const trabajador7 = new trabajadorDto();
    trabajador7.correo = 'jc@gmail.com';
    trabajador7.nombre = 'Luis Campuzano Mendoza';
    trabajador7.departamento = 'INFORMATICA';
    trabajador7.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador7);

    const trabajador8 = new trabajadorDto();
    trabajador8.correo = 'jd@gmail.com';
    trabajador8.nombre = 'David Molina Juárez';
    trabajador8.departamento = 'INFORMATICA';
    trabajador8.grupoDepartamento = 'PAS';
    this.trabajadoresPas.push(trabajador8);

    this.trabajadoresService.setTrabajadores(this.trabajadoresPas);
  }

}
