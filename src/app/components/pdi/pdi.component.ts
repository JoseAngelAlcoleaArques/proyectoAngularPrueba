import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../types/trabajador-dto';
import {TrabajadoresService} from '../../services/trabajadores-service';

@Component({
  selector: 'app-pdi',
  templateUrl: './pdi.component.html',
  styleUrls: ['./pdi.component.css']
})
export class PdiComponent implements OnInit {

  trabajadoresPdi: trabajadorDto[] = [];

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    const trabajador1 = new trabajadorDto();
    trabajador1.correo = 'ja@gmail.com';
    trabajador1.nombre = 'Jose Ánge Alcolea Arques';
    trabajador1.departamento = 'POLITECNICA';
    trabajador1.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador1);

    const trabajador2 = new trabajadorDto();
    trabajador2.correo = 'jb@gmail.com';
    trabajador2.nombre = 'Pedro Martinez Sanchez';
    trabajador2.departamento = 'POLITECNICA';
    trabajador2.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador2);

    const trabajador3 = new trabajadorDto();
    trabajador3.correo = 'jc@gmail.com';
    trabajador3.nombre = 'Luis Campuzano Mendoza';
    trabajador3.departamento = 'POLITECNICA';
    trabajador3.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador3);

    const trabajador4 = new trabajadorDto();
    trabajador4.correo = 'jd@gmail.com';
    trabajador4.nombre = 'David Molina Juárez';
    trabajador4.departamento = 'POLITECNICA';
    trabajador4.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador4);

    const trabajador5 = new trabajadorDto();
    trabajador5.correo = 'ja@gmail.com';
    trabajador5.nombre = 'Asunción Cascales Carrillo';
    trabajador5.departamento = 'ENFERMERIA';
    trabajador5.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador5);

    const trabajador6 = new trabajadorDto();
    trabajador6.correo = 'jb@gmail.com';
    trabajador6.nombre = 'Pedro Martinez Sanchez';
    trabajador6.departamento = 'ENFERMERIA';
    trabajador6.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador6);

    const trabajador7 = new trabajadorDto();
    trabajador7.correo = 'jc@gmail.com';
    trabajador7.nombre = 'Luis Campuzano Mendoza';
    trabajador7.departamento = 'ENFERMERIA';
    trabajador7.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador7);

    const trabajador8 = new trabajadorDto();
    trabajador8.correo = 'jd@gmail.com';
    trabajador8.nombre = 'David Molina Juárez';
    trabajador8.departamento = 'ENFERMERIA';
    trabajador8.grupoDepartamento = 'PDI';
    this.trabajadoresPdi.push(trabajador8);

    this.trabajadoresService.setTrabajadores(this.trabajadoresPdi);
  }
}
