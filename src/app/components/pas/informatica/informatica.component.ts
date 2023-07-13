import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: []
})
export class InformaticaComponent implements OnInit {

  trabajadoresInformatica: trabajadorDto[] = [];
  nombre = 'INFORMATICA';
  telefono = '654198754';

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresInformatica = this.trabajadoresService.getTrabajadoresByDepartamento('INFORMATICA');
  }

}
