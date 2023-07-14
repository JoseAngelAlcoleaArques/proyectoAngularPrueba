import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';

@Component({
  selector: 'app-enfermeria',
  templateUrl: './enfermeria.component.html',
  styleUrls: []
})
export class EnfermeriaComponent implements OnInit {

  trabajadoresEnfermeria: trabajadorDto[] = [];
  nombre = 'ENFERMERIA';
  telefono = '32132112';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresEnfermeria = this.trabajadoresService.getTrabajadoresByDepartamento(departamentosEnum.ENFERMERIA);
  }

}
