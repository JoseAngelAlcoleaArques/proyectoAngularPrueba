import {Component, OnInit, ViewChild} from '@angular/core';
import {trabajadorDto} from '../../types/trabajador-dto';
import {TrabajadoresService} from '../../services/trabajadores-service';

@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.css']
})
export class PasComponent implements OnInit {

  trabajadoresPas: trabajadorDto[] = [];

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresPas = this.trabajadoresService.getTrabajadoresByGrupoDepartamento('PAS');
  }

}
