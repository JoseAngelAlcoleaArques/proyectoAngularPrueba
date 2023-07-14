import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {grupoDepartamentoEnum} from '../../../enum/grupo-departamento-enum';

@Component({
  selector: 'app-pas-home',
  templateUrl: './pas-home.component.html',
  styleUrls: []
})
export class PasHomeComponent implements OnInit {

  trabajadoresPas: trabajadorDto[] = [];
  nombre = 'PAS';
  telefono = '987564785';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresPas = this.trabajadoresService.getTrabajadoresByGrupoDepartamento(grupoDepartamentoEnum.PAS);
  }

}
