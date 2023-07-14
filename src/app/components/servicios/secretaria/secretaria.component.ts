import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: []
})
export class SecretariaComponent implements OnInit {

  trabajadoresSecretaria: trabajadorDto[] = [];
  nombre = 'SECRETARIA';
  telefono = '354545654';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresSecretaria = this.trabajadoresService.getTrabajadoresByDepartamento(departamentosEnum.SECRETARIA);
  }

}
