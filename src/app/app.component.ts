import {Component, OnInit} from '@angular/core';
import {trabajadorDto} from './types/trabajador-dto';
import {TrabajadoresService} from './services/trabajadores-service';
import {grupoDepartamentoEnum} from './enum/grupo-departamento-enum';
import {departamentosEnum} from './enum/departamentos-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoAngularPrueba2';
  trabajadores: trabajadorDto[] = [];

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    const trabajador1 = new trabajadorDto();
    trabajador1.correo = 'ja@gmail.com';
    trabajador1.nombre = 'Jose Ánge Alcolea Arques';
    trabajador1.departamento = departamentosEnum.ATENCIONALUSUARIO;
    trabajador1.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador1);

    const trabajador2 = new trabajadorDto();
    trabajador2.correo = 'jb@gmail.com';
    trabajador2.nombre = 'Pedro Martinez Sanchez';
    trabajador2.departamento = departamentosEnum.ATENCIONALUSUARIO;
    trabajador2.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador2);

    const trabajador3 = new trabajadorDto();
    trabajador3.correo = 'jc@gmail.com';
    trabajador3.nombre = 'Luis Campuzano Mendoza';
    trabajador3.departamento = departamentosEnum.ATENCIONALUSUARIO;
    trabajador3.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador3);

    const trabajador4 = new trabajadorDto();
    trabajador4.correo = 'jd@gmail.com';
    trabajador4.nombre = 'David Molina Juárez';
    trabajador4.departamento = departamentosEnum.ATENCIONALUSUARIO;
    trabajador4.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador4);

    const trabajador5 = new trabajadorDto();
    trabajador5.correo = 'ja@gmail.com';
    trabajador5.nombre = 'Asunción Cascales Carrillo';
    trabajador5.departamento = departamentosEnum.INFORMATICA;
    trabajador5.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador5);

    const trabajador6 = new trabajadorDto();
    trabajador6.correo = 'jb@gmail.com';
    trabajador6.nombre = 'Pedro Martinez Sanchez';
    trabajador6.departamento = departamentosEnum.INFORMATICA;
    trabajador6.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador6);

    const trabajador7 = new trabajadorDto();
    trabajador7.correo = 'jc@gmail.com';
    trabajador7.nombre = 'Luis Campuzano Mendoza';
    trabajador7.departamento = departamentosEnum.INFORMATICA;
    trabajador7.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador7);

    const trabajador8 = new trabajadorDto();
    trabajador8.correo = 'jd@gmail.com';
    trabajador8.nombre = 'David Molina Juárez';
    trabajador8.departamento = departamentosEnum.INFORMATICA;
    trabajador8.grupoDepartamento = grupoDepartamentoEnum.PAS;
    this.trabajadores.push(trabajador8);

    const trabajador9 = new trabajadorDto();
    trabajador9.correo = 'ja@gmail.com';
    trabajador9.nombre = 'Jose Ánge Alcolea Arques';
    trabajador9.departamento = departamentosEnum.POLITECNICA;
    trabajador9.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador9);

    const trabajador10 = new trabajadorDto();
    trabajador10.correo = 'jb@gmail.com';
    trabajador10.nombre = 'Pedro Martinez Sanchez';
    trabajador10.departamento = departamentosEnum.POLITECNICA;
    trabajador10.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador10);

    const trabajador11 = new trabajadorDto();
    trabajador11.correo = 'jc@gmail.com';
    trabajador11.nombre = 'Luis Campuzano Mendoza';
    trabajador11.departamento = departamentosEnum.POLITECNICA;
    trabajador11.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador11);

    const trabajador12 = new trabajadorDto();
    trabajador12.correo = 'jd@gmail.com';
    trabajador12.nombre = 'David Molina Juárez';
    trabajador12.departamento = departamentosEnum.POLITECNICA;
    trabajador12.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador12);

    const trabajador13 = new trabajadorDto();
    trabajador13.correo = 'ja@gmail.com';
    trabajador13.nombre = 'Asunción Cascales Carrillo';
    trabajador13.departamento = departamentosEnum.ENFERMERIA;
    trabajador13.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador13);

    const trabajador14 = new trabajadorDto();
    trabajador14.correo = 'jb@gmail.com';
    trabajador14.nombre = 'Pedro Martinez Sanchez';
    trabajador14.departamento = departamentosEnum.ENFERMERIA;
    trabajador14.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador14);

    const trabajador15 = new trabajadorDto();
    trabajador15.correo = 'jc@gmail.com';
    trabajador15.nombre = 'Luis Campuzano Mendoza';
    trabajador15.departamento = departamentosEnum.ENFERMERIA;
    trabajador15.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador15);

    const trabajador16 = new trabajadorDto();
    trabajador16.correo = 'jd@gmail.com';
    trabajador16.nombre = 'David Molina Juárez';
    trabajador16.departamento = departamentosEnum.ENFERMERIA;
    trabajador16.grupoDepartamento = grupoDepartamentoEnum.PDI;
    this.trabajadores.push(trabajador16);

    const trabajador17 = new trabajadorDto();
    trabajador17.correo = 'ja@gmail.com';
    trabajador17.nombre = 'Asunción Cascales Carrillo';
    trabajador17.departamento = departamentosEnum.SECRETARIA;
    trabajador17.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador17);

    const trabajador18 = new trabajadorDto();
    trabajador18.correo = 'jb@gmail.com';
    trabajador18.nombre = 'Pedro Martinez Sanchez';
    trabajador18.departamento = departamentosEnum.SECRETARIA;
    trabajador18.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador18);

    const trabajador19 = new trabajadorDto();
    trabajador19.correo = 'jc@gmail.com';
    trabajador19.nombre = 'Luis Campuzano Mendoza';
    trabajador19.departamento = departamentosEnum.SECRETARIA;
    trabajador19.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador19);

    const trabajador20 = new trabajadorDto();
    trabajador20.correo = 'jd@gmail.com';
    trabajador20.nombre = 'David Molina Juárez';
    trabajador20.departamento = departamentosEnum.SECRETARIA;
    trabajador20.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador20);

    const trabajador21 = new trabajadorDto();
    trabajador21.correo = 'ja@gmail.com';
    trabajador21.nombre = 'Asunción Cascales Carrillo';
    trabajador21.departamento = departamentosEnum.REPROG;
    trabajador21.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador21);

    const trabajador22 = new trabajadorDto();
    trabajador22.correo = 'jb@gmail.com';
    trabajador22.nombre = 'Pedro Martinez Sanchez';
    trabajador22.departamento = departamentosEnum.REPROG;
    trabajador22.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador22);

    const trabajador23 = new trabajadorDto();
    trabajador23.correo = 'jc@gmail.com';
    trabajador23.nombre = 'Luis Campuzano Mendoza';
    trabajador23.departamento = departamentosEnum.REPROG;
    trabajador23.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador23);

    const trabajador24 = new trabajadorDto();
    trabajador24.correo = 'jd@gmail.com';
    trabajador24.nombre = 'David Molina Juárez';
    trabajador24.departamento = departamentosEnum.REPROG;
    trabajador24.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador24);

    const trabajador25 = new trabajadorDto();
    trabajador25.correo = 'ja@gmail.com';
    trabajador25.nombre = 'Asunción Cascales Carrillo';
    trabajador25.departamento = departamentosEnum.CAFETERIA;
    trabajador25.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador25);

    const trabajador26 = new trabajadorDto();
    trabajador26.correo = 'jb@gmail.com';
    trabajador26.nombre = 'Pedro Martinez Sanchez';
    trabajador26.departamento = departamentosEnum.CAFETERIA;
    trabajador26.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador26);

    const trabajador27 = new trabajadorDto();
    trabajador27.correo = 'jc@gmail.com';
    trabajador27.nombre = 'Luis Campuzano Mendoza';
    trabajador27.departamento = departamentosEnum.CAFETERIA;
    trabajador27.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador27);

    const trabajador28 = new trabajadorDto();
    trabajador28.correo = 'jd@gmail.com';
    trabajador28.nombre = 'David Molina Juárez';
    trabajador28.departamento = departamentosEnum.CAFETERIA;
    trabajador28.grupoDepartamento = grupoDepartamentoEnum.SERVICIOS;
    this.trabajadores.push(trabajador28);

    this.trabajadoresService.setTrabajadores(this.trabajadores);
  }

}
