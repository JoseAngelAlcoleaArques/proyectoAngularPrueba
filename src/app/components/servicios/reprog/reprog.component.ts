import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';

@Component({
  selector: 'app-reprog',
  templateUrl: './reprog.component.html',
  styleUrls: []
})
export class ReprogComponent implements OnInit {

  trabajadoresReprog: trabajadorDto[] = [];
  nombre = 'REPROG';
  telefono = '951753654';

  constructor( private prabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresReprog = this.prabajadoresService.getTrabajadoresByDepartamento(departamentosEnum.REPROG);
  }

}
