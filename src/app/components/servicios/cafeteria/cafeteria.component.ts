import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: []
})
export class CafeteriaComponent implements OnInit {

  trabajadoresCafeteria: trabajadorDto[] = [];
  nombre = 'CAFETERIA';
  telefono = '32132112';

  constructor( private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresCafeteria = this.trabajadoresService.getTrabajadoresByDepartamento(departamentosEnum.CAFETERIA);
  }

}
