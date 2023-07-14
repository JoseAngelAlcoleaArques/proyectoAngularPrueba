import { Component, OnInit } from '@angular/core';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {grupoDepartamentoEnum} from '../../../enum/grupo-departamento-enum';

@Component({
  selector: 'app-pdi-home',
  templateUrl: './pdi-home.component.html',
  styleUrls: []
})
export class PdiHomeComponent implements OnInit {

  trabajadoresPdi: trabajadorDto[] = [];
  nombre = 'PDI';
  telefono = '787534565';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresPdi = this.trabajadoresService.getTrabajadoresByGrupoDepartamento(grupoDepartamentoEnum.PDI);
  }

}
