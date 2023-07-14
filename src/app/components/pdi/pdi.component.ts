import { Component, OnInit } from '@angular/core';
import {trabajadorDto} from '../../types/trabajador-dto';
import {TrabajadoresService} from '../../services/trabajadores-service';

@Component({
  selector: 'app-pdi',
  templateUrl: './pdi.component.html',
  styleUrls: ['./pdi.component.css']
})
export class PdiComponent implements OnInit {

  trabajadoresPdi: trabajadorDto[] = [];

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresPdi = this.trabajadoresService.getTrabajadoresByGrupoDepartamento('PDI');
  }
}
