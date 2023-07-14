import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';
import {grupoDepartamentoEnum} from '../../../enum/grupo-departamento-enum';

@Component({
  selector: 'app-servicios-home',
  templateUrl: './servicios-home.component.html',
  styleUrls: []
})
export class ServiciosHomeComponent implements OnInit {

  trabajadoresServicios: trabajadorDto[] = [];
  nombre = 'SERVICIOS';
  telefono = '456524213';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresServicios = this.trabajadoresService.getTrabajadoresByGrupoDepartamento(grupoDepartamentoEnum.SERVICIOS);
  }

}
