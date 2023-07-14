import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';

@Component({
  selector: 'app-politecnica',
  templateUrl: './politecnica.component.html',
  styleUrls: []
})
export class PolitecnicaComponent implements OnInit {

  trabajadoresPolitecnica: trabajadorDto[] = [];
  nombre = 'POLITECNICA';
  telefono = '434564456';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresPolitecnica = this.trabajadoresService.getTrabajadoresByDepartamento(departamentosEnum.POLITECNICA);
  }

}
